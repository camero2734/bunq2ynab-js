import { Api } from "./Api";

export type BunqApi<T = unknown> = Api<T> & { userId: number };

const ENDPOINT = 'https://api.bunq.com/v1';

export async function createClient(apiToken: string): Promise<BunqApi> {
  const keyPair = await crypto.subtle.generateKey(
    { name: 'RSASSA-PKCS1-v1_5', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' },
    true, ['sign']
  );

  const publicKey = await crypto.subtle.exportKey('spki', keyPair.publicKey);
  const exportedAsString = String.fromCharCode.apply(null, new Uint8Array(publicKey) as unknown as number[]);
  const exportedAsBase64 = btoa(exportedAsString);
  const pemExported = `-----BEGIN PUBLIC KEY-----\n${exportedAsBase64}\n-----END PUBLIC KEY-----`;

  const [api, updateAuthToken] = createSwaggerApi(keyPair.privateKey);

  const { data: installationData } = await api.installation.createInstallation({
    client_public_key: pemExported,
  }, { mergeResponse: true } as any);

  const publicIp = await getPublicIp();

  if (!installationData.Token?.token) throw new Error('Could not create installation');
  updateAuthToken(installationData.Token?.token);

  await api.deviceServer.createDeviceServer({
    description: 'bunq2ynab-js on cloudflare workers',
    secret: apiToken,
    permitted_ips: [publicIp],
  }, { mergeResponse: true } as any);

  const { data: sessionData } = await api.sessionServer.createSessionServer({
    secret: apiToken,
  }, { mergeResponse: true } as any);

  if (!sessionData.Token?.token || !sessionData.UserPerson?.id) throw new Error('Could not create session');
  updateAuthToken(sessionData.Token.token);

  let bunqApi = api as BunqApi;
  bunqApi.userId = sessionData.UserPerson.id;

  return bunqApi;
}

function createSwaggerApi(privateKey: CryptoKey, token?: string): [Api<unknown>, (newAuthToken: string) => void] {
  let clientAuthToken = token;
  const updateAuthToken = (newAuthToken: string) => clientAuthToken = newAuthToken;

  const api = new Api({
    baseUrl: ENDPOINT,
    baseApiParams: {
      credentials: undefined // Credentials option doesn't work in Cloudflare Workers
    },

    customFetch: async (info: RequestInfo, init?: RequestInit) => {
      console.log(`Making request to ${info}`);
      // Request signature
      const signature = await generateSignature(init?.body, privateKey);

      init ||= {};
      init.headers = {
        ...(init.headers || {}),
        'X-Bunq-Client-Signature': signature,
        ...(clientAuthToken ? { 'X-Bunq-Client-Authentication': clientAuthToken } : {}),
      };

      const response = await fetch(info, init);
      let data = await response.json() as { Response?: any[] };

      // For some reason, Bunq's swagger schema doesn't match the actual API -- it returns
      // an array of objects instead of an object with keys. This is a workaround for that.
      if ((init as any)?.mergeResponse && Array.isArray(data.Response)) {
        data = Object.assign({}, ...data.Response);
      } else {
        data = data.Response as any;
      }

      return new Response(JSON.stringify(data), response as unknown as Bun.ResponseInit);
    }
  })

  return [api, updateAuthToken];
}

async function generateSignature(body: any, privateKey: CryptoKey) {
  const dataToSign = new TextEncoder('utf-8').encode(body);

  const signature = await crypto.subtle.sign(
    {
      name: "RSASSA-PKCS1-v1_5",
      hash: "SHA-256",
    },
    privateKey,
    dataToSign
  );

  return btoa(String.fromCharCode(...new Uint8Array(signature)));
}

async function getPublicIp() {
  const response = await fetch('https://api.ipify.org?format=json');
  const ip = ((await response.json()) as { ip?: string }).ip;
  if (!ip) throw new Error('Could not get IP address');
  return ip;
}
