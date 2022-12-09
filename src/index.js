import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StateProvider from './contexts/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
root.render(
    <StateProvider>
        <App />
    </StateProvider>
);



