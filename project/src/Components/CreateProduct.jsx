import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateProduct = () => {
    let [name, setname] = useState("")
    let [gst, setGst] = useState("")
    let [price, setprice] = useState("")
    let [category, setcCategory] = useState("")
    let data = { name, gst, price, category }
    let navigate = useNavigate();
    const addMerchant = (e) => {

        e.preventDefault()
        axios.post(`http://localhost:8080/db`, data)
            .then((res) => { console.log(res); alert("Data Added succesfully") })
            .catch((err) => { console.log(err); alert('Data not Found') })
        navigate("/Productview")
    }
    return (
        <div className='merchantsignup'>
            <div className='merchantsign'>
                <h2> Add Product </h2>
                <hr />
                <form action="">
                    <label htmlFor="">Product Name </label>
                    <input type="text" value={name} onChange={(e) => { setname(e.target.value) }} placeholder='Enter the Name' required />
                    <label htmlFor="">GST</label>
                    <input type="text" value={gst} onChange={(e) => { setGst(e.target.value) }} placeholder='Enter the GST %' required />
                    <label htmlFor="">Price </label>
                    <input type="number" value={price} onChange={(e) => { setprice(e.target.value) }} placeholder='Enter the price' required />
                    <label htmlFor="">Category</label>
                    <input type="text" value={category} onChange={(e) => { setcCategory(e.target.value) }} placeholder='Enter the Category' required />
                </form>
                <div className='signupbtn'>
                    <button onClick={addMerchant}>Add product</button>
                </div>
            </div>
        </div>
    )
}

export default CreateProduct
