import Article from "./Article";
import React from "react";
import {CardColumns} from "react-bootstrap";

const articles = [
    {
        id: '1',
        title: 'Some title 1',
        text: 'Some text text text 1'
    },
    {
        id: '2',
        title: 'Some title 2',
        text: 'Some text text text text text text text text text text text text text text 2'
    },
    {
        id: '3',
        title: 'Some title 3',
        text: 'Some text text text text text text text text text text text text text 3'
    },
    {
        id: '4',
        title: 'Some title 4',
        text: 'Some text text text text text text text text text text text text text text text text text text text text text text text text 4'
    },
    {
        id: '5',
        title: 'Some title 5',
        text: 'Some 5'
    },
    {
        id: '6',
        title: 'Some title 6',
        text: 'Some text text text text text text 6'
    },
    {
        id: '7',
        title: 'Some title 7',
        text: 'Some text text text text text text 7'
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

const LastArticles = () => {
    return <div className="container-fluid">
        <CardColumns>{renderArticles(articles)}</CardColumns>
    </div>
}

export default LastArticles;