import React from "react";
import { useEffect } from "react";
import { AppContext } from "../../AppContext";

export const OidcProvider: React.FC = (props: any) => {
  const { authStore } = React.useContext(AppContext);

  useEffect(() => {
    authStore.userManager.events.addUserLoaded(authStore.onUserLoaded);
    authStore.userManager.events.addSilentRenewError(authStore.onSilentRenewError);
    authStore.userManager.events.addAccessTokenExpired(authStore.onAccessTokenExpired);
    authStore.userManager.events.addAccessTokenExpiring(authStore.onAccessTokenExpiring);
    authStore.userManager.events.addUserUnloaded(authStore.onUserUnloaded);
    authStore.userManager.events.addUserSignedOut(authStore.onUserSignedOut);
  })

  useEffect(() => {
    return () => {
      authStore.userManager.events.removeUserLoaded(authStore.onUserLoaded);
      authStore.userManager.events.removeSilentRenewError(authStore.onSilentRenewError);
      authStore.userManager.events.removeAccessTokenExpired(authStore.onAccessTokenExpired);
      authStore.userManager.events.removeAccessTokenExpiring(authStore.onAccessTokenExpiring);
      authStore.userManager.events.removeUserUnloaded(authStore.onUserUnloaded);
      authStore.userManager.events.removeUserSignedOut(authStore.onUserSignedOut);
      }
  }, []);

  return React.Children.only(props); 
}