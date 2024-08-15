import React from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userAction';

export default function Header() {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { user, loading } = useSelector(state => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        alert.success("Logged out successfully!");
    }

    return (
        <nav className="navbar row sticky-top">
            {/* Logo */}
            <div className="col-12 col-md-2">
                <Link to="/">
                    <img src="./images/logo.webp" alt="logo" className="logo" />
                </Link>
            </div>

            {/* Search bar */}
            <div className="col-12 col-md-8 mt-2 mt-md-6">
                <Search />
            </div>

            <div className="col-12 col-md-2 mt-4 mt-md-0">
                {/* Cart */}
                <span className="ml-3" id="cart">Cart</span>
                <span className="ml-1" id="cart_count">0</span>
            
                {/* Login / Account */}
                { user ? (
                    <div className="ml-4 dropdown d-inline">
                        <Link 
                            to="/" 
                            className='btn dropdown-toggle text-white mr-4' 
                            type="button" 
                            id="dropDownMenuButton" 
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false" 
                        >
                            <figure className="avatar avatar-nav">
                                <img src="./images/images.png" alt="avatar" className="rounded-circle" />
                            </figure>
                            <span>{user && user.name}</span>
                        </Link>

                        <div className="dropdown-menu" aria-labelledby='dropDownMenuButton'>
                            <Link to="/eats/orders/me/myOrders" className='dropdown-item'>
                                Orders
                            </Link>
                            <Link to="/users/me" className='dropdown-item'>
                                Profile
                            </Link>
                            <Link to="/" onClick={handleLogout} className='dropdown-item'>
                                Logout
                            </Link>
                        </div>
                    </div>             
                ) : (
                    !loading && ( 
                        <Link to="/users/login" className="btn ml-4" id="login_btn">
                            LOGIN
                        </Link>
                    )
                )}
            </div>
        </nav>
    );
}
