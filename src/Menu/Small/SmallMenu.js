import React, {useState} from 'react'
import itemData, { itemConfig, button } from '../MenuData'
import SmallItem from './SmallItem'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

function SmallMenu(){
    const [show,setShow] = useState(false)
    const [item,setItem] = useState(itemData)
    const [render,setRender] = useState(0)
    function allocateShow(amount){
        setItem(amount)
        setRender(render+1)
    }
    if(show){
        return(            
    <div>
        <div>
        <i className={button.crossButton} onClick={()=>setShow(!show)}></i>
        </div>
    <Router>
    <div className="flex">
        <ul className="smallbackground" style={
            {background:itemConfig.background, color:itemConfig.fontColor}}>
        <h2 style={{textAlign:"center"}}>Menu</h2>
        <SmallItem show={item} allocateShow={allocateShow}/>
        </ul>
        <div style={{textAlign:"center"}}>
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
    </div>     
        )
    }
    else{
        return(
            <div >
                <i className={button.listButton} onClick={()=>setShow(!show)}></i>
                <div className="bigToSmall">
                <Router>
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
                </Router>
                </div>
            </div>
        )
    }
    
}

export default SmallMenu