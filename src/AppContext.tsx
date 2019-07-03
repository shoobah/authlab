import * as React from "react";
import { RootStore } from "./stores/RootStore";

export const AppContext = React.createContext(RootStore);