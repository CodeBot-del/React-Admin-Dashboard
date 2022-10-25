// Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilUsdSquare,
    UilMoneyWithdrawal,
    UilReceiptAlt,

}   from "@iconscout/react-unicons";

import img1 from '../imgs/1.jpg'
import img2 from '../imgs/2.jpg'
import img3 from '../imgs/3.jpg'


export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard",
    },
    {
        icon: UilClipboardAlt,
        heading: "Orders",
    },
    {
        icon: UilUsersAlt,
        heading: "Customers",
    },
    {
        icon: UilPackage,
        heading: "Products",
    },
    {
        icon: UilChart,
        heading: "Analytics",
    }
];

// dashboard cards array
export const CardsData = [
    {
        title: "Sales",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 10px 0px #e0c6f5",
        },  
        barValue: 70,
        value: "25,970",
        png: UilReceiptAlt,
        series: [
            {name: 'Sales',
            data: [31, 40, 28, 51, 42, 109, 100]
        }
        ]
    },
    {
        title: "Revenue",
        color: {
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 80,
        value: "14,270",
        png: UilMoneyWithdrawal,
        series: [
            {
                name: 'Revenue',
                data: [10, 100, 50, 70, 80, 30, 40],
            },
        ],
    },
    {
        title: "Expenses",
        color: {
            backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 60,
        value: "4,270",
        png: UilClipboardAlt,
        series: [
            {
                name: 'Expenses',
                data: [10, 25, 15, 30, 80, 12, 15, 20],
            },
        ],
    },
];

// Recent Update Card Data 
export const UpdateData = [
    {
        img: img1,
        name: "Andrew Thomas",
        noti: "Has ordered Apple Smart watch 2500mh battery",
        time: "25 seconds ago",
    },
    {
        img: img2,
        name: "James Bond",
        noti: "Has ordered Samsung S22 2500mh battery",
        time: "30 seconds ago",
    },
    {
        img: img3,
        name: "Iron Man",
        noti: "Has ordered Motorolla S22 2500mh battery",
        time: "30 seconds ago",
    },
    
]