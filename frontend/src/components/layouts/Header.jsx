import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="navbar row sticky-top">
        {/* Logo */}
        <div className="col-12 col-md-2">
            <Link to="/">
                <img src="./images/logo.webp" alt="logo" className="logo" />
            </Link>
        </div>

        {/* Search bar */}
        <div className="col-12 col-md-6 mt-2 mt-md-6">
            <Search />
        </div>

        {/* Cart */}
        <div className="col-12 col-md-2 mt-4 mt-md-0">
            <span className="ml-3" id="cart">Cart</span>
            <span className="ml-1" id="cart_count">0</span>
        </div>

        {/* Login / Account */}
        <div className="col-12 col-md-2 mt-4 mt-md-0">
            {
                10>5 ? (
                    <div className="ml-4 dropdown d-inline">
                        <figure className="avatar avatar-nav">
                            <img src="./images/images.png" alt="avatar" className="rounded-circle" />
                        </figure>
                        <span style={{color: "white", fontWeight: "bolder"}}>WSA Dev</span>
                    </div>             
                ) : (
                    <div className="btn ml-4" id="login_btn">
                        LOGIN
                    </div>
                )
            }
        </div>
    </nav>
  )
}
