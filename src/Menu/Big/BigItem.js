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
        <li key={e.id} className="flex">
            <Link to={e.path}
            style={{textDecoration:"none",color:e.color}}>
            <span> 
            <i className={e.icon} onClick={()=>{
                
                if(e.titleStyle === "inline"){
                    props.allocateShow(Clean(props.show))
                    
                }
                else{
                    props.allocateShow(SetActivePages(e.id, props.show)) 
                }
                  
             }}
            ></i>
            </span>
            </Link>
            <Link to={e.path} 
            style={{textDecoration:"none", display:e.titleStyle}}>
                <div
                style={{color:itemConfig.colorChange,
                        background:itemConfig.background,
                        
                }}
                className='bigFontStyle'
                >{e.name}</div>
            </Link>
            </li>
    ) 

    return itemList
} 


export default BigItem 