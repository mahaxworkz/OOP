import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../Styles/Product.css"
const ProductView = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/db")
      .then((e) => { setData(e.data) })
      .catch(() => { console.log("error"); })
  }, [data])

  let deleteproduct = (id) => {
    axios.delete(`http://localhost:5000/db/${id}`)
      .then(() => { console.log("delete the data") })
      .catch(() => { console.log("errorr") })
  }

  return (
    <div className='product'>
      <h1>Shop the product</h1>

      {data.map((e) => {
        return (

          <div className='product'>
            <div>
              {e.name}
              {e.gst}
              {e.price}
              {e.category}
            </div>

          </div>
        )
      })}
      <div>

      </div>
    </div>
  )
}

export default ProductView
