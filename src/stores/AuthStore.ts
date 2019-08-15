import { observable, action, computed } from "mobx";
import Oidc from "oidc-client";
import { IUser } from "../shared/types";

const config = {
  //authority: "http://localhost:5000",
  authority: "https://demo.identityserver.io",
  client_id: "spa",
  redirect_uri: "http://localhost:5003/signin-callback.html",
  response_type: "code",
  scope: "openid profile email api",
  post_logout_redirect_uri: "http://localhost:5003/index.html",
  loadUserInfo: true
};

export class AuthStore {
  @observable userManager = new Oidc.UserManager(config);
  @observable user: IUser | undefined = undefined;
  @observable loadingUser: boolean = false;

  @computed
  get isSignedIn(){
    return (this.user !== undefined && this.user.access_token !== undefined  && this.user.expired !== undefined); 
  } 

  @action
  public loadUser = () => {
    return this.userManager.getUser()
      .then((oidcUser) => {
        if (!oidcUser || oidcUser.expired) {
          return this.SignIn();
        }
        else {
          this.user = oidcUser !== null ? this.mapOidcUser(oidcUser) : undefined;
        }
      });
  }

  @action
  public onUserLoaded = (oidcUser: Oidc.User) => {
    console.log("onUserLoaded: User Loaded", oidcUser);
    this.user = oidcUser !== null ? this.mapOidcUser(oidcUser) : undefined
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
    this.user = undefined;
  };

  @action
  public onUserSignedOut = () => {
    console.log("onUserSignedOut");
    this.user = undefined;
  };

  @action
  public SignIn = () => {
    return this.userManager.signinRedirect().then(() => {
      console.log("redirecting...");
    });
  };

  @action
  public SignInRedirectCallback = (): Promise<Oidc.User> => {
    console.log("before");
    return this.userManager.signinRedirectCallback();
  };

  @action
  public SignOut = (): Promise<Oidc.User> => {
    return this.userManager.signoutRedirect();
  };

  private mapOidcUser = (user : Oidc.User): IUser => {
    return({
      id_token: user.id_token,
      session_state: user.session_state,
      access_token: user.access_token,
      refresh_token: user.refresh_token,
      token_type: user.token_type,
      scope: user.scope,
      profile: user.profile,
      expires_at: user.expires_at,
      state: user.state,
      expires_in: user.expires_in,
      expired: user.expired,
      scopes: user.scopes
    });
  }
}

