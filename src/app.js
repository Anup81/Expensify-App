import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'

import {addExpense} from './actions/expenses'

import { setTextFilter } from './actions/filters'

import getVisibleExpenses from './selectors/expenses'

import { Provider } from 'react-redux'

const store = configureStore() 

store.dispatch(addExpense({description: 'Water bill', amount: 2999 }))
store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000}))
store.dispatch(addExpense({description: 'Rent', amount: 10889 }))

// store.dispatch(setTextFilter('bill'))


// setTimeout(()=>{
//     store.dispatch(setTextFilter('Bill')) 
// }, 3000)


const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)


console.log(store.getState())

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
)

ReactDOM.render(jsx, document.getElementById('app'));
