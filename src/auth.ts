const ALLOW_LIST = ["cat-pic.jpg"];

// Check requests for a pre-shared secret
const hasValidHeader = (request: any, env: any) => {
  return request.headers.get("X-Custom-Auth-Key") === env.AUTH_KEY_SECRET;
};

function authorizeRequest(request: any, env: any, key: any) {
  switch (request.method) {
    case "PUT":
    case "DELETE":
      return hasValidHeader(request, env);
    case "GET":
      return ALLOW_LIST.includes(key);
    default:
      return false;
  }
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const key = url.pathname.slice(1);
    if (!authorizeRequest(request, env, key)) {
      return new Response("Forbidden", { status: 403 });
    }
  },
};
