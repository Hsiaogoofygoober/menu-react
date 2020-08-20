import React from 'react'
import itemData, { itemConfig } from '../MenuData'
import SetActivePages from './SetActivePages'
import Clean from './Clean'
import '../typesetting.css'
import {
    Link
  } from "react-router-dom";



function BigItem(props){
    const itemList= itemData.map((e)=>
    <li key={e.id}>
       <i className={e.icon}
        onClick={()=>SetActivePages(e.id,props.show)}>
        </i>
         
    </li>
    ) 

    return itemList
} 


export default BigItem 