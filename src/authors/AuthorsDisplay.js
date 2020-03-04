import React from "react";
import {AuthorCard} from "./AuthorCard";
import { CardColumns } from "react-bootstrap";

export function AuthorsDisplay(props){
    return (
        <div className = "display">
            <h3>Authors</h3>
            <CardColumns>
            {props.author.map( a => (
               <AuthorCard author = {a} key = {a.id} />
            ))}
            </CardColumns>
        </div>
    );

}
