import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header';
import Navbar from './component/Navbar';
import Content from './component/Content';


function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Content/>
        </div>

    );
}

export default App;
