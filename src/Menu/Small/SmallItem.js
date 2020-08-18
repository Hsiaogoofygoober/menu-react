import React from 'react';
import itemData from '../MenuData'
import {itemConfig} from '../MenuData'
import {
    Link
  } from "react-router-dom";

function SmallItem(){
    const itemList= itemData.map((e)=>
        <li key={e.id}>
            <i className={e.icon}></i>
            <Link to={e.path} 
            
            style={{textDecoration:"none",color:itemConfig.fontColor}}>
                <span className='smallFontStyle' >{e.name}</span>
            </Link>
            </li>
    ) 

    return itemList
}
export default SmallItem