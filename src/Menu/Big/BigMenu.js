import React, {useState} from 'react'
import BigItem from './BigItem'
import itemData from '../MenuData'
import {itemConfig,homeConfig} from '../MenuData'
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
        <ul  className="bigbackground " style={{background:itemConfig.background, color:itemConfig.fontColor}}>
        <BigItem show={show} allocateShow={allocateShow}/>
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

export default BigMenu