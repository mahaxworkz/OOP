import React, { useState } from 'react'
import axios from 'axios'

const Admin = () => {
    let [name, setname] = useState("")
    let [email, setemail] = useState("")
    let [Address, setAddress] = useState("")
    let [Company, setCompany] = useState("")
    let [phone, setphone] = useState("")
    let [password, setpassword] = useState("")
    let data = {name, email, phone, password}
    
    const addAdmin = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8080/db`, data)
        .then((res)=>{console.log(res); alert("Data Added succesfully")})
        .catch((err)=>{console.log(err); alert('Data not Found')})
    }
    return (
        <div className='merchantsignup'>
            <div className='merchantsign'>
                <h2>Admin Data</h2>
                <hr />
                <form action="">
                    <label htmlFor="">Name</label>
                    <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder='Enter the Name' required />
                    <label htmlFor="">Email</label>
                    <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder='Enter the Email' required />
                    <label htmlFor="">Phone no</label>
                    <input type="text" value={phone} onChange={(e)=>{setphone(e.target.value)}} placeholder='Enter the Phone' required />
                    <label htmlFor="">Address</label>
                    <input type="text" value={Address} onChange={(e)=>{setAddress(e.target.value)}} placeholder='Enter the Password' required />
                    <label htmlFor="">Company</label>
                    <input type="text" value={Company} onChange={(e)=>{setCompany(e.target.value)}} placeholder='Enter the Password' required />
                    <label htmlFor="">Password</label>
                    <input type="text" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='Enter the Password' required />
                
                </form>
                <div className='signupbtn'>
                    <button onClick={addAdmin}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Admin