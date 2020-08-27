import {itemConfig} from '../config/menuData'

function fontcolorChange(i,show) {
    show.forEach(e => {
        e.submenu.forEach(e => {
            if(e.id===i){
                e.color=itemConfig.colorChange 
                console.log("render1")
              }
              else{
                e.color=itemConfig.fontColor
                console.log("render2")
              }
        });
        
    });
   
    return show
}

export default fontcolorChange