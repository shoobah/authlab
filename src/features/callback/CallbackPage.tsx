import React, { useEffect } from "react";
import { AppContext } from "../../AppContext";

export const CallbackPage: React.FC = () => {
  const { routerStore, authStore } = React.useContext(AppContext);

  useEffect(() => {
    //authStore
      //.SignInRedirectCallback()
    console.log("before");
    authStore.userManager.signinRedirectCallback()
    .then(() => console.log("after "))
    .then(() => routerStore.goTo('home'))
  });

  return (  
    <div>
        Redirecting...
    </div>
  );    
}
