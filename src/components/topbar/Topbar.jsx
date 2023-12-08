import React, { useState } from 'react'
import { GoGear } from "react-icons/go";
import { VscBellDot } from "react-icons/vsc";
import './topbar.scss'
import { NavLink } from 'react-router-dom';

const Topbar = () => {
  // const [date, setDate] = useState(new Date());
  const date = new Date();
  const data = [
    {
      id: "1",
      fname: "Ritav",
      lname: "Kashyap",
      email: "kashyap.ritav@gmail.com"
    }
  ]

  return (
    <div className='Topbar'>
      <div className="logodiv">
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="date">{date.toDateString()}</div>
      </div>
      {data.map((user) => (
        <div className="welcome" key={user.id}>
          <div className='head'>Welcome {user.fname},</div>
          <div className='tag'>Here is a summary of your business</div>
        </div>))}
      <div className="btndiv">
        <NavLink to='/settings'><div className="btn"><GoGear /></div></NavLink>
        <NavLink to='/notification'><div className="btn"><VscBellDot /></div></NavLink>
      </div>
      <div className="profile">
        <div className="photo">
          <img src="./photo2.png" alt="photo" />
        </div>
        {data.map((user) => (
          <div className="content" key={user.id}>
            <div className="name">{user.fname} {user.lname}</div>
            <div className="mail">{user.email}</div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Topbar