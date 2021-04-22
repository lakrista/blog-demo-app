import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header';
import Navbar from './component/Navbar';
import Content from './component/Content';

function App(props) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Content articles={props.articles}/>
        </div>

    );
}

export default App;
