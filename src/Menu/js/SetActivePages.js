import {itemConfig,homeConfig} from "../config/menuData"

function SetActivePages(i,show){
    var a = show
     a.forEach((e) => {
        if (e.id === i){
            e.titleStyle = 'inline'
            e.color= itemConfig.colorChange
            homeConfig.color = itemConfig.fontColor
        } else {
            e.titleStyle = 'none'
            e.color= itemConfig.fontColor
        }
    });
   return a
}
 

export default SetActivePages