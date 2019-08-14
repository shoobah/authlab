export interface IUser {
  id_token: string;
  session_state: any;
  access_token: string | undefined;
  refresh_token: string;
  token_type: string;
  scope: string;
  profile: any;
  expires_at: number;
  state: any;

  expires_in: number | undefined;
  expired: boolean | undefined;
  scopes: string[];
}

export interface IUserProfile {

}