import React, { useEffect } from 'react';
import { HistoryAdapter, RouterView, ViewMap } from "mobx-state-router";
import { history } from './shared/utils/History';
import { RootStore } from './stores/RootStore';
import { DepartmentPage } from './features/department/DepartmentPage';
import { HomePage } from './features/home/HomePage';
import { NotFoundPage } from './features/NotFoundPage';
import { CallbackPage } from './features/callback/CallbackPage';
import { AppContext } from './AppContext';

import './App.css';
import { SigninPage } from './features/SigninPage';
import { ServiceUnavailablePage } from './features/ServiceUnavailablePage';

const historyAdapter = new HistoryAdapter(RootStore.routerStore, history);
historyAdapter.observeRouterStateChanges();

const App: React.FC = () => {
  const { routerStore, authStore } = React.useContext(AppContext);

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
  });

  const viewMap : ViewMap = {
    department: <DepartmentPage />,
    home: <HomePage />,
    notFound: <NotFoundPage />,
    signin: <SigninPage />,
    serviceUnavailable: <ServiceUnavailablePage />,
    callback: <CallbackPage />
  };

  const handleSignOut = ()=> {
    authStore.SignOut();
  }

  const renderTopBar = () : JSX.Element => {
    if (true){
      return(
        <div className={"topBar"}>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>);
    }
    else {
      return <noscript/>
    }
  }

  //authStore.loadUser();
  
  return (
    <> 
      {renderTopBar()}
      <RouterView routerStore={routerStore} viewMap={viewMap} />
    </>
  );
}

export default App;
