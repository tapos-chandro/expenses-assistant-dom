function getInputValue (id){
    return parseFloat(document.getElementById(id).value) 
}
function getInnerText (id, value){
    return document.getElementById(id).innerText = value
}


function getRemoveHiddenClass (id){
 document.getElementById(id).classList.remove('hidden')
}
function getAddClass (id){
 document.getElementById(id).classList.add('hidden')
}
