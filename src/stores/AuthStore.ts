import { observable, action } from "mobx";
import Oidc from "oidc-client";

const config = {
  authority: "http://localhost:5000",
  client_id: "js",
  redirect_uri: "http://localhost:5003/callback.html",
  response_type: "code",
  scope: "openid profile api1",
  post_logout_redirect_uri: "http://localhost:5003/index.html"
};

export class AuthStore {
  @observable
  public userManager = new Oidc.UserManager(config);

  @action
  public onUserLoaded = (user: Oidc.User) => {
    console.log("onUserLoaded: User Loaded");
  };

  @action
  public onSilentRenewError = (error: any) => {
    console.log("onSilentRenewError: Error");
  };

  @action
  public onAccessTokenExpired = () => {
    console.log("onAccessTokenExpired");
  };

  @action
  public onAccessTokenExpiring = () => {
    console.log("onAccessTokenExpiring");
  };

  @action
  public onUserUnloaded = () => {
    console.log("onUserUnloaded");
  };

  @action
  public onUserSignedOut = () => {
    console.log("onUserSignedOut");
  };

  @action
  public SignIn = () => {
    this.userManager.signinRedirect().then(() => {
      console.log("redirecting...");
    });
  };

  @action
  public SignInRedirectCallback = (): Promise<Oidc.User> => {
    console.log("before");
    return this.userManager.signinRedirectCallback();
  };
}
