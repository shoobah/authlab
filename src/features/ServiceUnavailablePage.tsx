import React from 'react';

const styles = {
    root: {
        padding: 16
    }
};

export function ServiceUnavailablePage() {
    return (
        <div style={styles.root}>
            <h1>503: Service Unavailable</h1>
        </div>
    );
}