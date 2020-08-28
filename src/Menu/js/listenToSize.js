import React,{useState, useEffect} from 'react'
import SmallMenu from '../small-screen/menu'
import BigMenu from '../large-screen/menu'
import {screenSize} from '../config/menuData'

function ListenToSize(){
   const [change,setChange] = useState(true)
    
    const handleRWD=()=>{
        if(window.innerWidth>screenSize.size){
            setChange(false)
        }
        else{
            setChange(true)
        }
    }

    useEffect(()=>{
        window.addEventListener("resize",handleRWD)   
        handleRWD()
    })

    if(change){
        return(<SmallMenu/>)
    }
    else{
        return(<BigMenu/>)
    }
}

export default ListenToSize