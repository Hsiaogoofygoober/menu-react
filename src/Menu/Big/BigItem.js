import React from 'react'
import itemData from '../MenuData'
import SetActivePages from './SetActivePages'
import '../typesetting.css'
import {
    Link
  } from "react-router-dom";
import {itemConfig} from '../MenuData'


function BigItem(props){
    const itemList= itemData.map((e)=>
        <li key={e.id}>
            <Link to={e.path}
            style={{textDecoration:"none",color:e.color}}>
            <span>
            <i className={e.icon} onClick={()=>{
                props.allocateShow(SetActivePages(e.id, props.show))    
             }}
            ></i>
            </span>
            </Link>
            <Link to={e.path} 
            style={{textDecoration:"none",color:e.fontColor, display:e.titleStyle}}>
                <span
                    className="bigFontStyle"
                >{e.name}</span>
            </Link>
            </li>
    ) 

    return itemList
} 

export default BigItem 