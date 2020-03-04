import React from "react";
import {Card, Button} from "react-bootstrap";
//constructor has to be a class

export function AuthorCard (props){

    return (
        <Card style = {{width: "16em"}}>
            <Card.Img variant = "top" src = "https://via.placeholder.com/150" />
            <Card.Body>
                <Card.Title>{props.author.AuthorName} </Card.Title>
          
                <Button variant = "warning"> Contact</Button>
            </Card.Body>
            
        </Card>

    );


}