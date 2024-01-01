import { createClient } from "./src/bunq/client";
interface EnvironmentVars {
  BUNQ_API_KEY: string;
}

export default {
  async fetch(request: Request, env: EnvironmentVars): Promise<Response> {
    try {
      const bc = await createClient(env.BUNQ_API_KEY);

      return Response.json({ message: 'ok!' });
    } catch (e) {
      if (e instanceof Response && !e.bodyUsed) return e;
      throw e;
    }
  },
} satisfies ExportedHandler<EnvironmentVars>;
