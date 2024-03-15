import Button from 'react-bootstrap-buttons';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import axios from 'axios';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const MerchantLogin = () => {
    let [email, setemail] = useState("")
    let [password, setPassword] = useState("")
    let navigation = useNavigate();
    function verifyMerchant(e) {
        e.preventDefault()
        // checking the email and password is correct or not in database
        axios.get(`http://localhost:8080/db/by-verifyemail?email=${email}&password=${password}`)
            .then((res) => {
                console.log(res.data);
                localStorage.setItem("Merchant", JSON.stringify(res.data.body))
                // redirecting to MerchantHomePage Component
                navigation('/merchanthomepage');
                alert("Login Successfull")
            })
            .catch((res) => { console.log(res); alert("Invalid Credencials") })
    }

    return (
        <div className='merchantsignup'>
            <div className='merchantsign'>
                <h2>Merchant login</h2>
                <hr />
                <form action="">
                    <label htmlFor="">Email</label>
                    <input type="text" value={email} onChange={(e) => { setemail(e.target.value) }} placeholder='Enter the Email' required />
                    <label htmlFor="">Password</label>
                    <input type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter the Password' required />
                </form>
                <div className='signupbtn'>
                    <button onClick={verifyMerchant}>login</button>
                    
                </div>
            </div>
        </div>
    )
}
export default MerchantLogin
