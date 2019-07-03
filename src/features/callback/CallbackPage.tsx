import React, { useEffect } from "react";
import { AppContext } from "../../AppContext";

export const DepartmentPage: React.FC = () => {
  const { routerStore, authStore } = React.useContext(AppContext);
  const { params } = routerStore.routerState;

  const handleClick = () => {
    routerStore.goTo('home');
  };

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
