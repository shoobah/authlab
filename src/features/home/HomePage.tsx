import React from "react";
import "./HomePage.css";
import { AppContext } from "../../AppContext";

const styles = {
  root: {
      padding: 16
  }
};

export const HomePage: React.FC = () => {
  console.log("Home");
  const { routerStore } = React.useContext(AppContext);

  const handleClick = () => {
    routerStore.goTo('department', { id: 'electronics' });
  };

  return ( 
    <div style={styles.root}>
    <h1>Home</h1>
    <button onClick={handleClick}>
        Go to Electronics
    </button>
</div>);
}