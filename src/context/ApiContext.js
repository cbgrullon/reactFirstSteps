import React from 'react';
const ApiContext = React.createContext({
    apiBaseUrl: `https://jsonplaceholder.typicode.com`
});
export default ApiContext;