import React from 'react';
import ReactTooltip from 'react-tooltip';
import './SearchCard.css'

//import {Card} from 'bootstrap'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const no_image = "https://thumbs.dreamstime.com/b/no-image-available-icon-vector-illustration-flat-design-140633878.jpg"

const SearchCard = ({ reading }) => {
  let title = reading.title
  let snippet = reading.snippet
  let link = reading.link
  let pagemap = reading.pagemap
  let prev = no_image
  console.log(title)
  if (pagemap !== undefined){
    if (pagemap.cse_image!== undefined){
      prev = pagemap.cse_image[0].src;
      console.log(pagemap)
    }
  }
  return (
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 mt-3">
                <div class="card">
                    <div class="card-horizontal">
                        <div class="img-square-wrapper">
                        <a target="_blank" href={decodeURI(link)}>
                          <img className="preview" src={prev} width={350} height={300}/>
                        </a>
                        </div>
                        <div class="card-body">
                        <h4 className="title">
                          <a className="ext-link" target="_blank" href={decodeURI(link)}>
                            {title}
                          </a>
                        </h4>
                            <p class="card-text">{snippet}}</p>
                        </div>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchCard;
