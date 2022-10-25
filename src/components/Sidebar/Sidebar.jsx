import React, { useState } from 'react';
import './Sidebar.css';
import Logo from '../../imgs/1.jpg';
import { SidebarData } from '../../Data/Data';
import {motion} from 'framer-motion';

import {UilSignOutAlt, UilBars} from '@iconscout/react-unicons';

const Sidebar = () => {
    const [selected, setSelected] = useState(0)
    const [expanded, setExpanded] = useState(true)

    const sidebarVariants = {
        true: {
            left: '0'
        },
        false:{
            left: '-60%'
        }
    }

  return (
    <>
    
        <div className="bars" style={expanded?{left: '60%'}: {left: '5%'}}>
            <UilBars/>
        </div>
    <motion.div className='Sidebar'
        variants={sidebarVariants}
        animate={window.innerWidth<=768?`${expanded}`: ''}
    >
        {/* logo */}
        <div className="logo">
            <img src={Logo} alt="" width="150" height="150"/>
            <span>
                Manager
            </span>
        </div>

        {/* menu */}
        <div className="menu">
            {SidebarData.map((item, index)=> {
                return(
                    <div 
                        className={selected===index?'menuItem active': 'menuItem'}
                        key={index}
                        onClick={()=>setSelected(index)}
                    >
                        <item.icon/>
                        <span>
                            {item.heading}
                        </span>
                    </div>
                )
            })}  

            <div className="menuItem">
                <UilSignOutAlt/>
            </div>
            </div>
        </motion.div>
        </>
    
  )
}

export default Sidebar