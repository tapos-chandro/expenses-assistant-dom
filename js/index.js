

document.getElementById('assistant-tab').addEventListener('click', function() {
    removeMultipleClass('history-tab','bg-gradient-to-r from-blue-500 to-purple-600 text-white')
    addClassList('assistant-tab','bg-gradient-to-r from-blue-500 to-purple-600 text-white')
    removeMultipleClass('assistant-tab', 'text-[#4c5663]')
    addClassList('history-section', 'hidden')
    removeMultipleClass('expense-form', 'hidden')
    
})

document.getElementById('history-tab').addEventListener('click', function(){
    addClassList('history-tab','bg-gradient-to-r from-blue-500 to-purple-600 text-white')
    removeMultipleClass('assistant-tab', 'bg-gradient-to-r from-blue-500 to-purple-600 text-white')
    addClassList('assistant-tab', 'text-[#4c5663]')
    addClassList('expense-form', 'hidden')
    removeMultipleClass('history-section', 'hidden')
   
    
})



// calculate handle 
const calculate = document.getElementById('calculate').addEventListener('click', function () {
    const income = getInputValue('income')
    const software = getInputValue('software')
    const courses = getInputValue('courses')
    const internet = getInputValue('internet')



 // income input validations 
    
    if(!income > 0  ){
        removeMultipleClass('income-error','hidden')
        return
    }else{
        addClassList('income-error', 'hidden')
    }
 // software input validations 
    if(!software > 0  ){
        removeMultipleClass('software-error', 'hidden')
        return
    }else{
        addClassList('software-error', 'hidden')
    }
    // courses input validations 
    if(!courses > 0  ){
        removeMultipleClass('courses-error', 'hidden')
        return
    }else{
        addClassList('courses-error', 'hidden')
    }
    // internet input validations 
    if(!internet > 0  ){
        removeMultipleClass('internet-error', 'hidden')
        return
    }else{
        addClassList('internet-error', 'hidden')
    }

    const totalExpansive = software + courses + internet
    const balance = income - totalExpansive

    if(income < totalExpansive){
        removeMultipleClass('income-error', 'hidden')
        return
    }


    getInnerText('total-expenses', totalExpansive)
    getInnerText('balance', balance)

    const historyList = document.getElementById('history-list')

    const div = document.createElement('div')

    div.innerHTML = `
    <div class="bg-white p-3 rounded-md shadow-sm border-l-2 border-purple-500">
        <p class="text-xs text-gray-500">Date: ${new Date().toLocaleDateString()}</p>
        <p class="text-xs text-gray-500">Income: ${income}</p>
        <p class="text-xs text-gray-500">Expenses: ${totalExpansive}</p>
        <p class="text-xs text-gray-500">Balance: ${balance}</p>
    </div>
    `
    historyList.appendChild(div)

    removeMultipleClass('results', 'hidden')

})

// calculate savings handle 
const calculateSaving = document.getElementById('calculate-savings').addEventListener('click', function () {

    const income = getInputValue('income')
    const software = getInputValue('software')
    const courses = getInputValue('courses')
    const internet = getInputValue('internet')
    const savings = getInputValue('savings')

    const totalExpansive = software + courses + internet
    const balance = income - totalExpansive
    const savingsAmount = ( balance / 100) * savings
    const remaining = balance - savingsAmount

    getInnerText('savings-amount', savingsAmount)
    getInnerText('remaining-balance', remaining)


    const historyList = document.getElementById('history-list')

    const div = document.createElement('div')

    div.innerHTML = `
    <div class="bg-white p-3 rounded-md shadow-sm border-l-2 border-purple-500">
        <p class="text-xs text-gray-500">Date: ${new Date().toLocaleDateString()}</p>
        <p class="text-xs text-gray-500">Income: ${balance}</p>
        <p class="text-xs text-gray-500">Expenses: ${savingsAmount}</p>
        <p class="text-xs text-gray-500">Balance: ${remaining}</p>
    </div>
    `
    historyList.appendChild(div)

})