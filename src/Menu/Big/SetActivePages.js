import {itemConfig} from "../MenuData"

function SetActivePages(i,show){
    var a = show
     a.forEach((e) => {
        if (e.id === i){
            e.titleStyle = 'inline'
            e.color= itemConfig.colorChange
        } else {
            e.titleStyle = 'none'
            e.color= itemConfig.fontColor
        }
    });
   return a
}
 

export default SetActivePages