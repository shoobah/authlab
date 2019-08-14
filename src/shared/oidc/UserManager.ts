import * as Oidc from "oidc-client";

const config = {
  authority: "http://localhost:5000",
  client_id: "js",
  redirect_uri: "http://localhost:5003/signin-callback.html",
  response_type: "code",
  scope: "openid profile api1",
  post_logout_redirect_uri: "http://localhost:5003/index.html"
};

const userManager = new Oidc.UserManager(config);

export default userManager;
