import React, { Component } from "react";
import "./Authors.css";
import {AuthorsDisplay} from "./AuthorsDisplay";

export default class Authors extends Component {
        constructor(props) {
            super(props);
            this.state = {
                author: [
                    {
                        id: 1,
                        AuthorName: "Eric Evans",
                        
                    },
                    {
                        id:2,
                        AuthorName: "Nicole Forsgren",
                    },

                    {
                        id:3,
                        AuthorName: "Lloyd Alexander",
                    },
                    {
                        id:4,
                        AuthorName: "Russian McReallyhardtospellname",
                    },

                    {
                        id:5,
                        AuthorName: "Bob Johnson",
                    },

                    {
                        id:6,
                        AuthorName: "F. Scott Fitzgerald",
                    },
                    {
                        id:7,
                        AuthorName: "Mostly Alexander Hamilton",
                        
                    },
                    {
                        id:8,
                        AuthorName: "Christopher Robin",
                    },
                    
                    
                ]
            };
        }


    render(){
        return (
            <div className = "Authors">
                <div className = "lander">
                    <AuthorsDisplay author = {this.state.author} />

                </div>
            </div>
        );
        }
    }