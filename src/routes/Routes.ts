import { Route, RouterStore, RouterState } from "mobx-state-router";

const checkForUserSignedIn = (
  fromState: RouterState,
  toState: RouterState,
  routerStore: RouterStore
) => {
  const {
    rootStore: { authStore }
  } = routerStore;

  authStore.userManager.getUser().then(function(user: any) {
    if (user) {
      console.log("User logged in", user.profile);
    } else {
      console.log("User not logged in");
      authStore.SignIn();
    }
  });
  return Promise.resolve();
};

export const routes: Route[] = [
  {
    name: "home",
    pattern: "/"
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
    name: "callback",
    pattern: "/callback.html"
  }
];
