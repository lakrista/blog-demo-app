import Article from "./Article";
import React from "react";
import {CardColumns} from "react-bootstrap";

const renderArticles = (articles) => {
    if (articles.length > 0) {
        return articles.map((article) => (
            <Article key={article.id}
                     title={article.title}
                     text={article.text}/>
        ));
    }
};

const LastArticles = (props) => {
    return <div className="container-fluid">
        <CardColumns>{renderArticles(props.articles)}</CardColumns>
    </div>
}

export default LastArticles;