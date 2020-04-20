import React, { useEffect, useState } from "react";
import "./Books.css";
import {BookDisplay} from "./BookDisplay";

export default function Books (props) {
       const [data, setdata] = useState ([]);

       useEffect(() => {
        fetch ("https://local:5001/api/books/")
         .then (response => response.json())
         .then (data => setdata(data));

       }, []);


    
        return (
            <div className = "Books">
                <div className = "lander">
                    <BookDisplay books = {data} />

                </div>
            </div>
        );
        
    }