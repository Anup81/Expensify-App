console.log('Redux Expensify Running')

import { createStore, combineReducers } from "redux"





store.subscribe(()=>{
    const state = store.getState() 
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({description:'Rent', amount: 100, createdAt: -21000 }))
const expenseTwo = store.dispatch(addExpense({description:'Coffee', amount: 200, createdAt: -1000 }))
// // console.log(store.getState())

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500}))

// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter(''))

// store.dispatch(sortByDate())
// store.dispatch(sortByAmount())

store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(300))

const demoState = {
    expenses: [{
        id: 'khksdhkf',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 3333,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined, 
        endDate: undefined
    }
}

const user = {
    name: 'Anup',
    age: 24
}

console.log({
    ...user,
    location: 'Nepal'
})