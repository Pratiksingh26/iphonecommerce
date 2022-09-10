import React from 'react'
import { useParams } from 'react-router'
import {Data} from "../Data"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem,delItem } from '../redux/actions'

const ProductDetail = () => {

  

  const [cartbtn, setCartbtn] = useState("Add To Cart")

  const proid = useParams();
  const proDetail = Data.filter((x)=> x.id == proid.id)
  const product = proDetail[0];
  console.log(product)

  const dispatch = useDispatch()

  const handleCart = (product) => {
      if(cartbtn === "Add To Cart"){
        dispatch(addItem(product))
        setCartbtn("Remove From Cart")
      }
      else{
        dispatch(delItem(product))
        setCartbtn("Add To Cart")
      }
  }


  return (
    <>
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center mx-auto product">
          <img src={product.img} alt={product.title} height="400px"/>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1 className='display-5 fw-bold'>{product.title}</h1>
          <hr />
          <h2 className='my-4'>Rs.{product.price}</h2>
          <p className='lead'>{product.desc}</p>
          <button onClick={()=> handleCart(product)} className='btn btn-outline-primary'>{cartbtn}</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductDetail
