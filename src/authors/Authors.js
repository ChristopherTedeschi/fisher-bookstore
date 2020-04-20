import React, { useEffect, useState } from "react";
//import "./Books.css";
import {AuthorsDisplay} from "./AuthorsDisplay";

export default function Authors (props) {
       const [data, setdata] = useState ([]);

       useEffect(() => {
        fetch ("https://local:5001/api/authors/")
         .then (response => response.json())
         .then (data => setdata(data));

       }, []);


    
        return (
            <div className = "Authors">
                <div className = "lander">
                    <AuthorsDisplay books = {data} />

                </div>
            </div>
        );
        
    }