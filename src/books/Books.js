import React, { Component } from "react";
import "./Books.css";
import {BookDisplay} from "./BookDisplay";

export default class Books extends Component {
        constructor(props) {
            super(props);
            this.state = {
                books: [
                    {
                        id: 1,
                        title: "Domain Driven Design",
                        author: "Eric Evans",
                        isbn: "978-032112517"
                    },
                    {
                        id:2,
                        title : "Accelerate",
                        author: "Nicole Forsgren",
                        isbn: "978-194278831"
                    },

                    {
                        id:3,
                        title : "Taran Wanderer",
                        author: "Lloyd Alexander",
                        isbn: "9789175744537"
                    },
                    {
                        id:4,
                        title : "Crime and Punishment",
                        author: "Russian McReallyhardtospellname",
                        isbn: "9780784830529"
                    },

                    {
                        id:5,
                        title : "The Black Cauldron",
                        author: "Lloyd Alexander",
                        isbn: "9780006725640"
                    },

                    {
                        id:6,
                        title : "Of Mice and Men",
                        author: "F. Scott Fitzgerald",
                        isbn: "9783401018041"
                    },
                    {
                        id:7,
                        title : "Federalist Papers",
                        author: "Mostly Alexander Hamilton",
                        isbn: "9780606004824"
                    },
                    {
                        id:8,
                        title : "Grapes of Wrath",
                        author: "F. Scoot Fitzgerald",
                        isbn: "9780440900856"
                    },
                    
                    
                ]
            };
        }


    render(){
        return (
            <div className = "Books">
                <div className = "lander">
                    <BookDisplay books = {this.state.books} />

                </div>
            </div>
        );
        }
    }