
import React, { useState } from 'react'
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    let [email, setemail] = useState("")
    let [password, setPassword] = useState("")
    let navigation = useNavigate();
    function verifyAdmin(e) {
        e.preventDefault()
        // checking the email and password is correct or not in database
        axios.get(`http://localhost:8080/db/by-verifyemail?email=${email}&password=${password}`)
            .then((res) => {
                console.log(res.data);
                localStorage.setItem("admin", JSON.stringify(res.data.body))
                // redirecting to MerchantHomePage Component
                navigation('/product');
                alert("Login Successfull")
            })
            .catch((res) => { console.log(res); alert("Invalid Credencials") })
    }

    return (
        <div className='merchantsignup'>
            <div className='merchantsign'>
                <h2>Admin login</h2>
                <hr />
                <form action="">
                    <label htmlFor="">Email</label>
                    <input type="text" value={email} onChange={(e) => { setemail(e.target.value) }} placeholder='Enter the Email' required />
                    <label htmlFor="">Password</label>
                    <input type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter the Password' required />
                </form>
                <div className='signupbtn'>
                    <button onClick={verifyAdmin}>login</button>
                </div> 
                <h4>________________________(or)_________________________</h4>
                <NavLink to="/admin" className="signup">Sign up</NavLink>
            </div>
        </div>
    )
}
export default AdminLogin
