import React from 'react'

const EditExpensePage = (props) =>{
    console.log(props)
    return (
        <div>
        This is Edit Page {props.match.params.id}
    </div>
    )
}

export default EditExpensePage;