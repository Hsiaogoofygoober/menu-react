import React from 'react';
import itemData, {itemConfig, submenuData, homeConfig} from '../config/menuData'
import SetActivePages from '../js/SetActivePages'
import Clean from '../js/Clean'
import fontcolorChange from '../js/fontcolorChange'
import {
    Link
  } from "react-router-dom";

function Item(props){
    const itemList= itemData.map((e)=>
    <li key={e.id}>
      <Link to='#' style={{color:e.color}}>
      <i className={e.icon}>
        <span
        className="showStyle" 
        onClick={
         ()=>{
           if(e.titleStyle==="none"){
              props.allocateShow(SetActivePages(e.id,props.item))
           }
           else if(e.titleStyle==="inline"){
             props.allocateShow(Clean(props.item))
           }
          }
        }>
          {e.name}
        </span>
      </i>
      </Link>
    <div style={{display:e.titleStyle}}>    
    {
      e.submenu.map(link => {
         return(
           <div key={link.id} 
           className="submenuBackground"
           style={{background: submenuData.background}}>
           <Link to={link.path} 
           onClick={()=>{
            props.allocateShow(fontcolorChange(link.id,props.item))
           }}
           style={{
            textDecoration:'none',
            color: link.color
            }}>
             {link.name}
           </Link>
           </div>
         )
      })
    }
    </div>
    </li>
    ) 

    return (
      <div>
        <li style={{color:itemConfig.colorChange}}>
      <Link to={homeConfig.path}
          style={{
            textDecoration:'none',
            color: homeConfig.color
          }}
          onClick={
            ()=>{
              if(homeConfig.color===itemConfig.fontColor){
                 props.allocateShow(SetActivePages(homeConfig.id,props.item))
                 homeConfig.color=itemConfig.colorChange 
              }
             }
           }
      >
      <i className={homeConfig.icon}>
      <span className="showStyle">
        {homeConfig.name}
      </span>
      </i>
      </Link>
      </li>
      {itemList}
      </div>
    )
}
export default Item