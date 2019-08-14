import React from "react";
import { AppContext } from "../../AppContext";

const styles = {
  root: {
      padding: 16
  }
};

export const DepartmentPage: React.FC = () => {
  const { routerStore } = React.useContext(AppContext);
  const { params } = routerStore.routerState;

  const handleClick = () => {
    routerStore.goTo('home');
  };

  return ( 
    <div style={styles.root}>
      <h1>Welcome to {params.id}</h1>
      <button onClick={handleClick}>Go Home!</button>
    </div>);
    
}
