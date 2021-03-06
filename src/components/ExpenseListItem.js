import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'


const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) =>(
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
        <button onClick={(e)=>{
            dispatch(removeExpense({id}))
        }}>Remove</button>
    </div>
)

// const mapStateToProps = (state) =>{
//     return {
//         id: state.expenses.id
//     }
// }

export default connect()(ExpenseListItem)


// export default ExpenseListItem