

function SetActivePages(i,show){
    var a = show
     a.forEach((e) => {
        if (e.id === i){
            e.titleStyle = 'inline'
        } else {
            e.titleStyle = 'none'
        }
    });
   return a
}
 

export default SetActivePages