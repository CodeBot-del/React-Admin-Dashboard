import React from 'react'
import { CardsData } from '../../Data/Data'
import './Cards.css'

const Cards = () => {
  return (
    <div className="Cards">
        {CardsData.map((card, id) =>{
            return(
                <div className="parentContainer">
                    <Card/>
                </div>
            )
        })}
    </div>
  )
}

export default Cards