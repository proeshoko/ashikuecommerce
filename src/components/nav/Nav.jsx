import React from 'react'
import {logoutActionCreator} from "./ActionCreater";
import "./Nav.css";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Nav() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = ()=> {
        navigate("/")
        dispatch(logoutActionCreator())
    }
    return (
        <div className='navContainer'>
            <div>
                <h2> Ecommerce-App</h2>
            </div>
            <div className='links a'>
                <Link to='/home'>Home</Link>
                <Link to='/'>Signin</Link>
                <Link to='/signup'>Signup</Link>
                <Link to='/product'>Product</Link> 
                <Link to='/allproduct'>AllProduct</Link> 
                <button className="btn btn-outline-danger me-5" onClick={logout}>Logout</button>
            </div>
        </div>

    )
}

export default Nav