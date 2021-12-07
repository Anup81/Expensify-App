import React from 'react'
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses'

const ExpenseList = (props) =>(
    <div>
        {props.expenses.map((expense)=>{
            return <ExpenseListItem key={expense.id} {...expense} />
        })}
     
    </div>
)

// const ConnectedExpenseList = connect((state)=>{
//     return{
//         expenses: state.expenses
//     }
// })(ExpenseList)

// export default ConnectedExpenseList;

const mapStateToProps = (state)=>{
    return{
        expenses: getVisibleExpenses(state.expenses, state.filters)
        // filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseList)
