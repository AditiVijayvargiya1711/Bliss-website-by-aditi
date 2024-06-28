import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import list from "components/assets/allproduct.jsx"
import { Link } from 'react-router-dom';
import "./product.css"
const Product = () => {
  let myproduct= useParams()
  let producttobeshown=list.find(e=>(e.id).toString()===myproduct.productid)
  let [mainimage, setmainimage]=useState(producttobeshown.img[0])
  return (
    <>
    <div id="productdetails">
      <div id="photos">
        <img id="productimage"src={mainimage} alt="mainimage"/>
        <div>
          <img className="productphotos"src={producttobeshown.img[0]} onClick={()=>{setmainimage(producttobeshown.img[0])}} alt="image1"/>
          <img className="productphotos"src={producttobeshown.img[1]} onClick={()=>{setmainimage(producttobeshown.img[1])}} alt="image2"/>
          <img className="productphotos"src={producttobeshown.img[2]} onClick={()=>{setmainimage(producttobeshown.img[2])}} alt="image3"/>
          <img className="productphotos"src={producttobeshown.img[3]} onClick={()=>{setmainimage(producttobeshown.img[3])}} alt="image4"/>
        </div>
      </div>
      <div id="productinfo">
        <div id="producttitle">{producttobeshown.title}</div>
        <div id="productdescription">{producttobeshown.description}</div>
        <div id="old">{producttobeshown.oldprice}</div>
        <div id="new">{producttobeshown.newprice}</div>
        <Link to="/cart"><div id="addtocart">Add to Cart</div></Link>
      </div>
    </div>
    </>
  )
}

export default Product
