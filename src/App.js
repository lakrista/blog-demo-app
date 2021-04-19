import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header';
import Navbar from './component/Navbar';
import Content from './component/Content';
import articles from './data/articles.json';

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Content articles={articles}/>
        </div>

    );
}

export default App;
