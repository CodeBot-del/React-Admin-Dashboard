import React from 'react'
import Updates from '../Updates/Updates'
import './RightSide.css'

const RightSide = () => {
  return (
    <div className="RightSide">
        <div>
            <h3>Sale Updates</h3>
            <Updates/>
        </div>
        <div>
            <h3>Customers Served</h3>
        </div>
    </div>
  )
}

export default RightSide