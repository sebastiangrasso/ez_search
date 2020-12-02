import React from 'react';
//import {Card} from 'bootstrap'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const SearchCard = ({ reading }) => {
  let title = reading.title
  let desc = reading.snippet
  let link = reading.link

  return (
    <div class="container-fluid">
      <div class="row">
          <Route path='/res' component={() => window.location = {link}}/>
          <a href="/res">{title}</a>
          <p>{desc}</p>
      </div>
    </div>
  )
}

export default SearchCard;
