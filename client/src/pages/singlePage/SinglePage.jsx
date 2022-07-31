import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import SinglePost from '../../components/singlePost/SinglePost'
import "./SinglePage.css"

export default function SinglePage() {
  return (
    <div className='singlePage'>
        <SinglePost />
        <SideBar />
    </div>
  )
}
