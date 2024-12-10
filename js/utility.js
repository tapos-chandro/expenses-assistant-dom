function getInputValue (id){
    return parseFloat(document.getElementById(id).value) 
}
function getInnerText (id, value){
    return document.getElementById(id).innerText = value
}

function removeMultipleClass (id, removeClassPropertyName){
    const element = document.getElementById(id).classList
    const classes = removeClassPropertyName
    element.remove(...classes.split(' '))

}
function addClassList (id, addedClassPropertyName){
    const element = document.getElementById(id).classList
    const classes = addedClassPropertyName
    element.add(...classes.split(' '))
}
