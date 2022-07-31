import React from 'react';
import "./TopBar.css"
import img from '../img/me.jpg';
import { Link } from 'react-router-dom';

export default function TopBar() {
    const user = false;
  return (
    <div className='top'>
        <div className='topLeft'>
            <i className="topIcon fa-brands fa-youtube"></i>
            <i className="topIcon fa-brands fa-pinterest"></i>
            <i className="topIcon fa-brands fa-twitter"></i>
            <i className="topIcon fa-brands fa-linkedin"></i>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'>
                    <Link className='link' to="/">Home</Link>
                </li>
                <li className='topListItem'>
                    <Link className='link' to="/post/:postId">About</Link>
                </li>
                <li className='topListItem'>
                    <Link className='link' to="/write">Write</Link>
                </li>
                <li className='topListItem'>
                    <Link className='link' to="/posts">Product</Link>
                </li>
                <li className='topListItem'>
                    <Link className='link' to="/settings">Contact</Link>
                </li>
                <li className='topListItem'>
                    {user && "Logout"}
                </li>
            </ul>
        </div>
        <div className='topRight'>
            {
                user ? (
                    <img className='topImg' src={img} alt='Profile Display'/>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className='link' to="/login">Login</Link>
                        </li>
                        <li className="topListItem">
                            <Link className='link' to="/register">Register</Link>
                        </li>
                    </ul>
                    )
            }
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
