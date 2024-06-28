import React from 'react'
import "./box.css"
import {Link} from  'react-router-dom';
const Box = (props) => {
  let x= props.y
  
  return (
    <Link to={"/product/"+x.id}>
      <div id="boxesbox">
        <img id="imgbox" alt="" src={x.img[0]}/>
        <div id="insidebox">
          <div id="title">{x.title}</div>
          <div id="oldprice">{x.oldprice}</div>
          <div id="newprice">{x.newprice}</div>
        </div>
      </div>
    </Link>
  )
}

export default Box
