import React, {useState, useEffect} from 'react'
import { CardsData } from '../../Data/Data'
import Card from '../Card/Card'
import './Cards.css'

const Cards = () => {

    const [salesTotal, setSalesTotal] = useState(0);
    const [salesPercent, setSalesPercent] = useState('');

    async function getSalesTotal() {
        try {
            const response = await fetch("http://192.168.100.242:5000/sales/daily-total-sales")
            const parseRes = await response.json()

            setSalesTotal(parseRes)
        } catch (err) {
            console.log(err.message);
        }
    }

    async function getSalesPercent() {
        try {
            const response = await fetch("http://192.168.100.242:5000/sales/daily-sales-percentage")
            const parseRes = await response.json()

            setSalesPercent(parseRes)
        } catch (err) {
            console.log(err.message);
        }
    }


    useEffect(() => {

        getSalesTotal()
        getSalesPercent()

    }, [])

  return (
    <div className="Cards">
        {CardsData.map((card, id) =>{
            return(
                <div className="parentContainer">
                    <Card
                        title={card.title}
                        color={card.color}
                        barValue={card.title === "Sales" ? salesPercent : card.barValue}
                        // check if the title is sales
                        value={card.title === "Sales" ? salesTotal : card.value}
                        png={card.png}
                        series={card.series}
                    />
                </div>
            )
        })}
    </div>
  )
}

export default Cards