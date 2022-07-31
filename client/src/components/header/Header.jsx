/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "./Header.css"
import headerimg from '../img/header.jpg'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            {/* <span className='headerTitleSm'>Hunt</span>
            <span className='headerTitleLg'>Amazon Finds</span> */}
            <img className='headerImg' src={headerimg} alt='header picture'/>
        </div>
    </div>
  )
}
