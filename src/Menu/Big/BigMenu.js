import React, {useState} from 'react'
import BigItem from './BigItem'
import itemData from '../MenuData'
import {itemConfig} from '../MenuData'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";


function SmallMenu(){
    const [show,setShow]=useState(itemData)
    const [render,setRender] = useState(0)
    function allocateShow(amount){
        setShow(amount)
        setRender(render+1)
    }

    return(
    <Router>
    <div className="flex">
        {console.log("render")}
        <div>
        <ul className="bigbackground" style={{position:"fixed",background:itemConfig.background, color:itemConfig.fontColor}}>
        <BigItem item={itemData} show={show} allocateShow={allocateShow}/>
        </ul>
    </div>
    <div className="moveRight">
    <Switch>
            {itemData.map(route=>(
                <Route
                    key={route.id}
                    path={route.path}
                    children={route.function}
                    exact={route.exact}
                />
            ))}
        </Switch>
    </div>
    </div>
    </Router>
    )
}

export default SmallMenu