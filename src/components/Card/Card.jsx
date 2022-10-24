import React, {useState} from 'react'
import './Card.css'
import {AnimateSharedLayout} from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar';
import Chart from 'react-apexcharts';
import 'react-circular-progressbar/dist/styles.css';
import {UilTimes} from '@iconscout/react-unicons';

const Card = (props) => {

    const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
        {
            expanded ? (
                <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>
            ): 
            <CompactCard param = {props} setExpanded={()=>setExpanded(true)}/>
        }
    </AnimateSharedLayout>
  )
}


// CompactCard
function CompactCard({param, setExpanded}){
    const Png = param.png;
    return(
        <div className="CompactCard"
            style={{
                background : param.color.backGround,
                boxShadow: param.color.boxShadow,
            }}
            onClick={setExpanded}
        >

            <div className="radialBar">
                <CircularProgressbar
                    value={param.barValue}
                    text={`${param.barValue}%`}
                />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png/>
                <span>TZS {param.value}</span>
                <span>Last 24 hours</span>
            </div>
        </div>
    )
}

// ExpandedCard
function ExpandedCard({param, setExpanded}){

    const data = {
        options:{
            chart: {
                type: 'area',
                height: 'auto',
            },
            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.35,
            },
            fill: {
                colors: ["#fff"],
                type: 'gradient',
            },
            dataLabels: {
                enabled: false,
            },
        }
    }

    return(
        <div className="ExpandedCard"
        style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow,
        }} 
        >
            <div>
                <UilTimes onClick={setExpanded}/>
            </div>
            <span>{param.title}</span>
            <div className="chartContainer">
                <Chart series={param.series} type='area' options={data.options}/>
            </div>
            <span>Last 24 hours</span>
        </div>
    )
}

export default Card