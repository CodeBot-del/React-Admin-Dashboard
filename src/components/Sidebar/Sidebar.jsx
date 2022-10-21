import React from 'react';
import './Sidebar.css';
import Logo from '../../imgs/1.jpg';

const Sidebar = () => {
  return (
    <div className='Sidebar'>
        {/* logo */}
        <div className="logo">
            <img src={Logo} alt="" width="150" height="150"/>
            <span>
                sol<span>UN</span>ala
            </span>
        </div>

        {/* menu */}
        <div className="menu"></div>
            <div className="menuItem">
                <div>
                    <UilEstate/>
                </div>
                <span>Dashboard</span>
            </div>
    </div>
  )
}

export default Sidebar