console.log('Redux is Running!')

import {createStore}  from 'redux'


const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () =>({
    type: 'RESET'
})

const setCount = ({count}) =>({
    type: 'SET',
    count
})

// const setCount = ({count}) =>(
//     {type: 'SET',
//     count: 0}
//     )


const store = createStore((state={count: 0}, action)=>{
    switch(action.type){
        
        case 'INCREMENT':
            // const increment = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            // const decrement = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return{
                count: state.count - action.decrementBy
            }

        case 'SET':
            return{
                count: action.count
            }

        case 'RESET':
            return{
                count: 0
            }
        default: 
            return state;
    }
    
    
    
    // if (action.type == 'INCREMENT'){
    //     return {
    //         state: state.count + 1
    //     }
    // }else{
    //     return state
    // }
})

store.subscribe(()=>{
    return console.log(store.getState())
})

store.dispatch(incrementCount({incrementBy: 5}))

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// })

// store.dispatch({
//     type: 'INCREMENT'
// })

store.dispatch(resetCount())

store.dispatch(decrementCount({decrementBy: 10}))

store.dispatch(resetCount({count: 0}))

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// })

// store.dispatch({
//     type: 'SET',
//     count: 101
// })

store.dispatch(setCount({count: 101}))