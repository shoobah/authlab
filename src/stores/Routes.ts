import { Route, RouterStore, RouterState } from "mobx-state-router";

const checkForUserSignedIn = (
  fromState: RouterState,
  toState: RouterState,
  routerStore: RouterStore
) => {
  const {
    rootStore: { authStore }
  } = routerStore;

  // return authStore.userManager.getUser().then(function(user: any) {
  return authStore.loadUser().then( () => {

  if (authStore.user) {
      console.log("User logged in", authStore.user);
      return Promise.resolve();
    } else {
      console.log("User not logged in");
      return Promise.reject(new RouterState('signin'));
    }
  });
};

export const routes: Route[] = [
  {
    name: "home",
    pattern: "/",
    beforeEnter: checkForUserSignedIn
  },
  {
    name: "department",
    pattern: "/departments/:id",
    beforeEnter: checkForUserSignedIn
  },
  {
    name: "notFound",
    pattern: "/not-found"
  },
  {
    name: "signin",
    pattern: "/signin"
  },
  {
    name: "serviceUnavailable",
    pattern: "/service-unavailable"
  },
  {
    name: "callback",
    pattern: "/callback.html"
    // ,
    // onEnter: handleCallback
  }
];
