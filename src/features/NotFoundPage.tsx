import React from 'react';
import { AppContext } from '../AppContext';

const styles = {
    root: {
        padding: 16
    }
};

export function NotFoundPage() {
    const { routerStore } = React.useContext(AppContext);

    const handleClick = () => {
        routerStore.goTo('home');
      };
    
    return (
        <div style={styles.root}>
            <h1>Page Not Found</h1>
            <button onClick={handleClick}>Go Home!</button>
        </div>
    );
}