import {itemConfig} from "../config/menuData"

function Clean(show){
    var a = show
     a.forEach((e) => {
        e.titleStyle = 'none'
        e.color= itemConfig.fontColor
    });
   return a
}
 

export default Clean