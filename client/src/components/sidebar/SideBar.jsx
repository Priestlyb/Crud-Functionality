import React, { useEffect, useState } from 'react'
import "./SideBar.css"
import axios from "axios"
import sidebarimg from "../img/hafLogo.jpg"
import { Link } from 'react-router-dom';

export default function SideBar() {
  const [cats, setCats] = useState([]);

  useEffect(()=> {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  },[]);
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
      <span className="sidebarTitle">ABOUT ME</span>
      <img src={sidebarimg} alt="sidebarimg"/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio numquam, similique harum, excepturi fuga accusamus nemo commodi nihil porro veritatis corrupti, dolores esse sequi mollitia dolorum ad earum culpa unde!</p>
    </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        {cats.map((c)=>(
        <Link to={`/?cat=${c.name}`} className="linkr">
          <li className="sidebarListItem">{c.name}</li>
          </Link>
        ))}
      </ul>
    </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US:</span>
      <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-youtube"></i>
        <i className="sidebarIcon fa-brands fa-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-twitter"></i>
        <i className="sidebarIcon fa-brands fa-linkedin"></i>
      </div>
    </div>
    </div>
  )
}
