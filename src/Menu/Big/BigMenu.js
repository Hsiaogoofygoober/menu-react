import React, {useState} from 'react'
import BigItem from './BigItem'
import itemData from '../MenuData'
import {itemConfig} from '../MenuData'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";


function BigMenu(){
    const [show,setShow]=useState(itemData)
    const [render,setRender] = useState(0)
    function allocateShow(amount){
        setShow(amount)
        setRender(render+1)
    }
    console.log("oo")
    return(
    <Router>
    <div className="flex">
        <div>
        <ul  className="bigbackground" style={{position:"fixed",background:itemConfig.background, color:itemConfig.fontColor}}>
        <BigItem show={show} allocateShow={allocateShow}/>
        </ul>
    </div>
    <div className="moveRight">
    
        <Switch>
           {itemData.map(route=>(
               route.submenu.forEach(e => {
                   
                   return(
                    <Route
                        key={route.submenu[e.index].id}
                        path={route.submenu[e.index].path} 
                        children={route.submenu[e.index].function}
                    /> 
                   )
               })
            ))}
        </Switch>
    
    
    </div>
    </div>
    </Router>
    )
}

export default BigMenu