import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Books from "./books/Books";

export default function Routes ( ) {
    return (
        <Switch>
            <Route path = "/" exact component ={Home} />
            <Route path = "/books" exact component = {Books} />
        </Switch>
    );
}