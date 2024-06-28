import React from 'react'
import "./home.css"
import {Link} from 'react-router-dom';
import list from "components/assets/allproduct.jsx"
import Box from "components/box/box.jsx"
const home = () => {
  return (
    <>
      <div id="main">
        <div id="box">
          <div id="head">Bliss! We Deliver Beauty to Your Doorstep.</div>
          <div id="disc">Discover top makeup, skincare, and beauty products from leading brands. Enjoy exclusive deals, fast shipping, and personalized recommendations.</div>
          <Link to="shopnow"><button id="shopnow">SHOP NOW!</button></Link>
        </div>
      </div>
      <div id="offertitle">DISCOUNTS UPTO Rs.949</div>
      <div id="additional">
        <div id="offers">
          {list.map((item)=>{
            return item.oldprice.slice(3,)-item.newprice.slice(3,)>950?<Box key={item.id} y={item}/>:<></>
        })}
        </div>
      </div>
    </>
  )
}

export default home

