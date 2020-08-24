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
      <i className={e.icon}>
        <span onClick={
         ()=>props.allocateShow(SetActivePages(e.id,props.show))
        }>
          {e.name}
        </span>
      </i>
      
      <div style={{display: e.titleStyle}}>
        {console.log(e.submenu[0].path)
        }
       <Link to={e.submenu[0].path}>
          {e.submenu[0].name}
       </Link>
       <br/>
       <Link to={e.submenu[1].path}>
          {e.submenu[1].name}
       </Link>
      </div>
    </li>
    ) 

    return itemList
} 


export default BigItem 