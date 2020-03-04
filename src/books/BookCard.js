import React from "react";
import {Card, Button} from "react-bootstrap";
//constructor has to be a class

export function BookCard (props){

    return (
        <Card style = {{width: "16em"}}>
            <Card.Img variant = "top" src = "https://via.placeholder.com/150" />
            <Card.Body>
                <Card.Title>{props.book.title} </Card.Title>
                <Card.Text>Author: {props.book.author}</Card.Text>
                <Button variant = "warning"> Add to cart</Button>
            </Card.Body>
            
        </Card>

    );


}