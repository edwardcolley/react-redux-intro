import React from 'react';
import '../assets/css/app.scss';
import Clock from './clock';

const App = () => (
    <div className="app">
        <div className="welcome">
            <Clock/>
        </div>
    </div>
);

export default App;
