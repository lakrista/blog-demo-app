import {Card} from "react-bootstrap";
import React from "react";

const Article = (props) => {

    return <Card>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.text}
            </Card.Text>
        </Card.Body>
    </Card>
};

export default Article;