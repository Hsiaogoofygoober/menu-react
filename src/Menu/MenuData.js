import Home from './pages/Home'
import Subpage1 from './pages/Subpage1'
import Subpage2 from './pages/Subpage2'
import Subpage3 from './pages/Subpage3'
import Subpage4 from './pages/Subpage4'
import Subpage5 from './pages/Subpage5'
import Subpage6 from './pages/SubPage6'


const itemData = [
   
    {
        id: 0,
        name: "button1",
        icon:"far fa-comment-dots",
        titleStyle: 'none',
        color:'#4d4d00',
        submenu:[
        {
            id: 1,
            index:0,
            name:"subpage1",
            path:"/subpage1",
            function: Subpage1,
        },
        {
            id: 2,
            index:1,
            name:"subpage2",
            path:"/subpage2",
            function: Subpage2,
        },  
        ]
    },
    {
        id: 1,
        name: "button2",
        icon:"fas fa-paperclip",
        titleStyle: 'none',
        color:'#4d4d00',
        submenu:[
            {
                id: 3,
                index:0,
                name:"subpage3",
                path:"/subpage3",
                function: Subpage3,
            },
            {
                id:4,
                index:1,
                name:"subpage4",
                path:"/subpage4",
                function: Subpage4,
            },  
            ]
    },
    {
        id: 2,
        name: "button3",
        icon:"fas fa-feather-alt",
        titleStyle: 'none',
        color:'#4d4d00',
        submenu:[
            {
                id:5,
                index:0,
                name:"subpage5",
                path:"/subpage5",
                function: Subpage5,
            },
            {
                id:6,
                index:1,
                name:"subpage6",
                path:"/subpage6",
                function: Subpage6,
            },  
            ]
    },
]
const itemConfig = {
    id:1,
    background: "#ffffb3",
    fontColor: "#4d4d00",
    colorChange: "#99ccff"
}

const button={
    id:1,
    listButton:"fas fa-bars fa-2x",
    crossButton:"fas fa-times fa-2x"
}


export  {itemData,itemConfig,button}
export default itemData