import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Order = () => {
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
    <section>
      <h1>your order</h1>
      <div className='id'>
      </div>
      <div class="info">
        <h1></h1>
        <p></p>
      </div>
      {data.map((e) => {
        return (

          <div className='product'>
            <div>
              {e.name}
              {e.gst}
              {e.price}
              {e.category}
            </div>

            <button><Link to={`/update/${e.id}`}>Edit</Link></button>
      <button onClick={() => { deleteproduct(e.id) }}>Delete</button>
          </div>
        
      )})
      }
    </section>
  )
}

export default Order