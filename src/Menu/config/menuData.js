import Home from '../pages/Home'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Pages2'
import Page3 from '../pages/Pages3'
import Page4 from '../pages/Pages4'
import Page5 from '../pages/Page5'


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
        function: Page1,
        path:"/page1",
        icon:"far fa-comment-dots",
        titleStyle: 'none',
        color:'#4d4d00'
    },
    {
        id: 3,
        name: "button2",
        function: Page2,
        path:"/page2",
        icon:"fas fa-paperclip",
        titleStyle: 'none',
        color:'#4d4d00'
    },
    {
        id: 4,
        name: "button3",
        function: Page3,
        path:"/page3",
        icon:"fas fa-feather-alt",
        titleStyle: 'none',
        color:'#4d4d00'
    },
    {
        id: 5,
        name: "button4",
        function: Page4,
        path:"/page4",
        icon:"fab fa-sistrix",
        titleStyle: 'none',
        color:'#4d4d00'
    },
    {
        id: 6,
        name: "button5",
        function: Page5,
        path:"/page5",
        icon:"fas fa-address-book",
        titleStyle: 'none',
        color:'#4d4d00'
    }
]
const itemConfig = {    
    background: "#ffffb3",
    fontColor: "#4d4d00",
    colorChange: "#99ccff"
}

const button={
    listButton:"fas fa-bars fa-2x",
    crossButton:"fas fa-times fa-2x"
}
const screenSize={
    size: 500     
}


export  {itemData,itemConfig,button,screenSize}
export default itemData