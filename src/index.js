import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sdata from './dataarray';
import Card from './card.jsx';

function res(val){
  console.log(val);
  return(
  <Card
    imgsrc = {val.imgsrc}
    title = {val.title}
    link = {val.link}
  />
  )
}


ReactDOM.render(
  <>
  <div className="header">
    <h1>This is Netflix clone</h1>
  </div>

  <div className="card-container">

      {Sdata.map(res)}

    </div>

  </>,
  document.getElementById('root')
);

