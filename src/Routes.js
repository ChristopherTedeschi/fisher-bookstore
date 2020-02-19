import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Books from "./books/Books";
import Authors from "./authors/Authors";

export default function Routes ( ) {
    return (
        <Switch>
            <Route path = "/" exact component ={Home} />
            <Route path = "/books" exact component = {Books} />
            <Route path = "/authors" exact component = {Authors} />
        </Switch>
    );
}