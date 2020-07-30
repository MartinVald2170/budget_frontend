import React from "react"
import axios from "axios"


const DeleteExpense = ({expenseId, onDelete}) => {

    function deleteExpense(){
        axios.delete(`https://sheltered-taiga-69250.herokuapp.com/expenses/${expenseId}`)
            .then(onDelete)

        }
    
    return (
        <button onClick={deleteExpense}>X</button>
    )
}


export default DeleteExpense 