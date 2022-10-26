import React, {useState, useEffect} from 'react'
import { CardsData } from '../../Data/Data'
import Card from '../Card/Card'
import './Cards.css'

const Cards = () => {

    const [salesTotal, setSalesTotal] = useState(0);
    const [productPercent, setProductPercent] = useState('');
    const [productsOut, setProductsOut] = useState(0);
    const [salesPercent, setSalesPercent] = useState('');
    const [delivered, setDelivered] = useState(0);
    const [deliveredPercent, setDeliveredPercent] = useState('');

    // get sales total
    async function getSalesTotal() {
        try {
            const response = await fetch("http://192.168.100.242:5000/sales/daily-total-sales")
            const parseRes = await response.json()

            setSalesTotal(parseRes)
        } catch (err) {
            console.log(err.message);
        }
    }
    // get sales percentage
    async function getSalesPercentage() {
        try {
            const response = await fetch("http://192.168.100.242:5000/sales-reports/daily-total-sales-percentage")
            const parseRes = await response.json()

            setSalesPercent(parseRes)
        } catch (err) {
            console.log(err.message);
        }
    }


    // get products out percentage
    async function getProductsPercent() {
        try {
            const response = await fetch("http://192.168.100.242:5000/sales/daily-sales-percentage")
            const parseRes = await response.json()

            setProductPercent(parseRes)
        } catch (err) {
            console.log(err.message);
        }
    }

    // get products out
    async function getProductsOut() {
        try {
            const response = await fetch("http://192.168.100.242:5000/sales/daily-total-products-sold")
            const parseRes = await response.json()

            setProductsOut(parseRes)
        } catch (err) {
            console.log(err.message);
        }
    }

    // get delivered
    async function getDelivered() {
        try {
            const response = await fetch("http://192.168.100.242:5000/orders/daily-completed-orders-count")
            const parseRes = await response.json()

            setDelivered(parseRes)
        } catch (err) {
            console.log(err.message);
        }
    }
    // get delivered percentage
    async function getDeliveredPercent() {
        try {
            const response = await fetch("http://192.168.100.242:5000/orders/daily-completed-orders-percentage")
            const parseRes = await response.json()

            setDeliveredPercent(parseRes)
        } catch (err) {
            console.log(err.message);
        }
    }


    useEffect(() => {

        getSalesTotal()
        getProductsPercent()
        getProductsOut()
        getSalesPercentage()
        getDelivered()
        getDeliveredPercent()

    }, [])

  return (
    <div className="Cards">
        {CardsData.map((card, id) =>{
            return(
                <div className="parentContainer">
                    <Card
                        title={card.title}
                        color={card.color}
                        barValue={card.title === "Sales" ? salesPercent : card.title === "Products Out" ? productPercent : deliveredPercent}
                        // check if the title is either sales, products out or else.
                        value={card.title === "Sales" ? salesTotal : card.title === "Products Out" ? productsOut : delivered}
                        // value={card.title === "Sales" ? salesTotal : productsOut}
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