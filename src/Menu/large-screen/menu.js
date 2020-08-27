import React, {useState} from 'react'
import Item from './item'
import itemData,{itemConfig,homeConfig} from '../config/menuData'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";


function Menu(){
    const [show,setShow]=useState(itemData)
    const [render,setRender] = useState(0)
    function allocateShow(amount){
        setShow(amount)
        setRender(render+1)
    }
    return(
    <Router>
    <div className="flex">
        <div>
        <ul  className="bigbackground " style={{background:itemConfig.background, color:itemConfig.fontColor}}>
        <Item show={show} allocateShow={allocateShow}/>
        </ul>
    </div>
    <div className="moveRight">
        
        
        <Switch>
            <Route
                path={homeConfig.path}
                name = {homeConfig.name}
                children={homeConfig.function}
                exact={homeConfig.exact}
            />
                
           {itemData.map(route=>(
               route.submenu.map(e => (
                <Route
                        key={e.id}
                        path={e.path} 
                        children={e.function}
                    /> 
               )
               )
            ))}
        </Switch>
    
    
    </div>
    </div>
    </Router>
    )
}

export default Menu