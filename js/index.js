

// calculate handle 
const calculate = document.getElementById('calculate').addEventListener('click', function(){

    const income = getInputValue('income')
    const software = getInputValue('software')
    const courses = getInputValue('courses')
    const internet = getInputValue('internet')
    

    console.log({income, software, courses, internet})
    const totalExpansive = software + courses + internet
    const balance = income - totalExpansive
    getInnerText('total-expenses', totalExpansive)
    getInnerText('balance', balance)
    

})