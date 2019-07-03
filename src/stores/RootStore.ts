import { RouterState, RouterStore } from "mobx-state-router";
import { routes } from "../routes/Routes";
import { AppStore, AuthStore } from ".";

const notFound = new RouterState("notFound");

export class RootStoreClass {
  appStore = new AppStore();
  authStore = new AuthStore();
  routerStore = new RouterStore(this, routes, notFound);
}

export const RootStore = new RootStoreClass();
