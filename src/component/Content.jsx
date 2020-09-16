import React from 'react';
import mainLogo from './../background-backlight-blur-color.jpg';
import Article from "./Article";
import {CardDeck} from "react-bootstrap";

const Content = () => {

    const articles = [
        {
            id: '1',
            title: 'Some title 1',
            text: 'Some text text text 1'
        },
        {
            id: '2',
            title: 'Some title 2',
            text: 'Some text text text 2'
        },
        {
            id: '3',
            title: 'Some title 3',
            text: 'Some text text text 3'
        }
    ];

    const renderArticles = (articles) => {
        if (articles.length > 0) {
            return articles.map((article) => (
                <Article key={article.id}
                         title={article.title}
                         text={article.text}/>
            ));
        }
    };

    return <div className='content'>
        <div className="content-main-img"><img alt="" src={mainLogo}/></div>
        <div>
            <CardDeck>{renderArticles(articles)}</CardDeck>
        </div>
    </div>
};

export default Content;