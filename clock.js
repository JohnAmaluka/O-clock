setInterval(setClock, 1000)
const hourHand=Document.qureselector('[data-hour-hand]')
const muniteHand=document.querySelector('[data-minute-hand]')
const secondHand=Document.querySelector(['data-second-hand'])
function setClock(){
    currentDate=newDate()
    const secondratio=currentDate.getseconds()/60
    const minuteratio=(secondratio +currentDate.getminute())/60
    const handration=(minuteratio + currentDate.getHour())/12
    SetRotation (secondHand,secondratio)
    setRotation (minuterHoud,minutesratio)
    setRotation(hoursHand,handration)
}
function setRotation(element,ratationRatio){
    element.style.setproperty('--rotation,rotationratio*360')
}
    setClock()
