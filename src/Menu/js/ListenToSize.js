import React,{useState, useEffect} from 'react'
import SmallMenu from '../small-screen/menu'
import LargeMenu from '../large-screen/menu'
function ListenToSize(){
   const [change,setChange] = useState(true)
    
    const handleRWD=()=>{
        if(window.innerWidth>500){
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
        return(<LargeMenu/>)
    }
}

export default ListenToSize