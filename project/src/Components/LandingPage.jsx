import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className="discription">
            <div>
                <ul>
                    <li><Link to="/login">
                        <h1>Merchant</h1>
                    </Link></li>
                    <li>< Link to="/Productview" >
                        <h1>Products</h1>
                    </Link ></li>
                    <li><Link to="/adminlogin">
                        <h1>Admin</h1>
                    </Link></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )


}

export default LandingPage
