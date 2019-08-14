import { RouterState, RouterStore } from "mobx-state-router";
import { routes } from "./Routes";
import { AppStore, AuthStore } from ".";

export class RootStoreClass {
  appStore = new AppStore();
  authStore = new AuthStore();
  routerStore = new RouterStore(this, routes, new RouterState('notFound'));
}

export const RootStore = new RootStoreClass();
