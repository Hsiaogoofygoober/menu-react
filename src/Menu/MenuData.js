import Home from './pages/Home'
import Subpage1 from './pages/Subpage1'
import Subpage2 from './pages/Subpage2'
import Subpage3 from './pages/Subpage3'
import Subpage4 from './pages/Subpage4'
import Subpage5 from './pages/Subpage5'
import Subpage6 from './pages/SubPage6'


const itemData = [
    {
        id:1,
        name:"home",
        function: Home,
        path:"/",
        icon:"fas fa-home",
        exact:true,
        titleStyle: 'none',
        color:'#4d4d00',
    },
    {
        id: 2,
        name: "button1",
        icon:"far fa-comment-dots",
        titleStyle: 'none',
        color:'#4d4d00',
        submenu:[
        {
            id:'a',
            name:"subpage1",
            path:"/subpage1",
            function: Subpage1,
        },
        {
            id:'b',
            name:"subpage2",
            path:"/subpage2",
            function: Subpage2,
        },  
        ]
    },
    {
        id: 3,
        name: "button2",
        icon:"fas fa-paperclip",
        titleStyle: 'none',
        color:'#4d4d00',
        submenu:[
            {
                id:'c',
                name:"subpage3",
                path:"/subpage3",
                function: Subpage3,
            },
            {
                id:'d',
                name:"subpage4",
                path:"/subpage4",
                function: Subpage4,
            },  
            ]
    },
    {
        id: 4,
        name: "button3",
        icon:"fas fa-feather-alt",
        titleStyle: 'none',
        color:'#4d4d00',
        submenu:[
            {
                id:'e',
                name:"subpage5",
                path:"/subpage5",
                function: Subpage5,
            },
            {
                id:'f',
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