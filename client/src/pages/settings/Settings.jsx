import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import "./Settings.css"
import dp from "../../components/img/me.jpg"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={dp} alt="" />
            <label htmlFor="fileInput">
            <i className=" settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" name="Add Display Picture" id="fileInput" style={{display: "none"}} />
          </div>
          <label>Username</label>
          <input type="text" placeholder='Priestly' />
          <label>Email</label>
          <input type="email" placeholder='sample@gmail.com' />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  )
}
