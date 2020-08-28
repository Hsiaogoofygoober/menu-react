import React from 'react';
import itemData from '../config/menuData'
import SetActivePages from '../js/setActivePages'
import {
    Link
  } from "react-router-dom";

function SmallItem(props){
    const itemList= itemData.map((e)=>
        <li key={e.id} className="showStyle" onClick={()=>{
            props.allocateShow(SetActivePages(e.id, props.item))
            props.setShow(false)
         }}>
             <Link to={e.path}
             style={{textDecoration:"none",color:e.color}}>
                <i className={e.icon}></i>
             </Link>
            <Link to={e.path} 
            style={{textDecoration:"none",color:e.color}}>
                
                <span className='smallFontStyle' >{e.name}</span>
            </Link>
            </li>
    ) 

    return itemList
}
export default SmallItem