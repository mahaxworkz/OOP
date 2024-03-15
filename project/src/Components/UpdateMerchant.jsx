import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const UpdateMerchant = () => {
let [name, setname] = useState("")
let [gst_number, setgst_number] = useState("")
let [email, setemail] = useState("")
let [phone, setphone] = useState("")
let [password, setpassword] = useState("")
let data = {name, email, gst_number, phone, password}

  let navigation = useNavigate();
  function verifyMerchant(e) {
    e.preventDefault()
    // checking for the phone number is correct or not in database
    axios.get(`http://localhost:8080/db/by-getbyPhone?email=${phone}`)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("Merchant", JSON.stringify(res.data.body))
        
        alert("user found")
      })
      .catch((res) => { console.log(res); alert("Invalid Credencials") })
      if (data!=null) {
    axios.post(`http://localhost:8080/merchants`, data)
    .then((res) => { console.log(res); alert("Data Added succesfully") 
    navigation('/merchanthomepage');})
    .catch((err) => { console.log(err); alert('Data not Found') })
        
      }

  }
  return (
    <div className='merchantsignup'>
      <div className='merchantsign'>
        <h2>Merchant Data</h2>
        <hr />
        <form action="">
          <label htmlFor="">Name</label>
          <input type="text" value={name} onChange={(e) => { setname(e.target.value) }} placeholder='Enter the Name' required />
          <label htmlFor="">GST_Number</label>
          <input type="text" value={gst_number} onChange={(e) => { setgst_number(e.target.value) }} placeholder='Enter the GST_Number' required />
          <label htmlFor="">Email</label>
          <input type="text" value={email} onChange={(e) => { setemail(e.target.value) }} placeholder='Enter the Email' required />
          <label htmlFor="">Phone no</label>
          <input type="text" value={phone} onChange={(e) => { setphone(e.target.value) }} placeholder='Enter the Phone' required />
          <label htmlFor="">Password</label>
          <input type="text" value={password} onChange={(e) => { setpassword(e.target.value) }} placeholder='Enter the Password' required />
        </form>
        <div className='signupbtn'>
          <button onClick={verifyMerchant}>update</button>
        </div>
      </div>
    </div>
  )

}

export default UpdateMerchant
