import React, {useState} from "react"
import axios from "axios"
import {Redirect, Link} from "react-router-dom"
import Button from "react-bootstrap/Button"


const CreateExpense = () => {

    const [expenseTitle, setExpenseTitle] = useState("")
    const [expenseValue, setExpenseValue] = useState()
    const [expenseDue, setExpenseDue] = useState("")
    const [isCreated, setIsCreated] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    function createExpense(){
        if(expenseTitle && expenseValue && expenseDue){
            axios.post(`https://sheltered-taiga-69250.herokuapp.com/expenses`, {
                expense: {
                    title: expenseTitle,
                    value: expenseValue, 
                 due: expenseDue
                }
         })
            .then(() => setIsCreated(true))
        } else {
            setErrorMessage("Please fill out the form")
         }
    }


    return (
        <div>
          
            <input
                placeholder="Expense Title"
                value={expenseTitle}
                onChange={e => setExpenseTitle(e.target.value)}
            />
              <input
                placeholder="Expense Value"
                value={expenseValue}
                onChange={e => setExpenseValue(e.target.value)}
            />
              <input
                placeholder="Expense Due Date"
                value={expenseDue}
                onChange={e => setExpenseDue(e.target.value)}
            />
            <br></br>
            <button onClick={createExpense}>Create Expense</button>
            {isCreated && <Redirect to="/AllExpenses" />}
            {errorMessage}

            
            <Link to={`/AllExpenses`}>
          <Button variant="primary" size="lg">
            Back to Expenses
            </Button>
            </Link>
        </div>
    )
}


export default CreateExpense 