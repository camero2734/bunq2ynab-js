console.log("Hello via Bun!");

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    return Response.json({ message: `Hello ${navigator.userAgent} at path ${url.pathname}!` });
  },
} satisfies ExportedHandler;
