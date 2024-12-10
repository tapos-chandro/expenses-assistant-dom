





// calculate handle 
const calculate = document.getElementById('calculate').addEventListener('click', function () {
    const income = getInputValue('income')
    const software = getInputValue('software')
    const courses = getInputValue('courses')
    const internet = getInputValue('internet')



 // income input validations 
    
    if(!income > 0  ){
        getRemoveHiddenClass('income-error')
        return
    }else{
        getAddClass('income-error')
    }
 // software input validations 
    if(!software > 0  ){
        getRemoveHiddenClass('software-error')
        return
    }else{
        getAddClass('software-error')
    }
    // courses input validations 
    if(!courses > 0  ){
        getRemoveHiddenClass('courses-error')
        return
    }else{
        getAddClass('courses-error')
    }
    // internet input validations 
    if(!internet > 0  ){
        getRemoveHiddenClass('internet-error')
        return
    }else{
        getAddClass('internet-error')
    }

    const totalExpansive = software + courses + internet
    const balance = income - totalExpansive

    if(income < totalExpansive){
        getRemoveHiddenClass('income-error')
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

    getRemoveHiddenClass('results')

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