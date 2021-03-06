import React, {useState, useEffect} from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import Button from "react-bootstrap/Button"



const EditExpense = (props) => {

    const [expenseTitle, setExpenseTitle] = useState("")
    const [expenseValue, setExpenseValue] = useState()
    const [expenseDue, setExpenseDue] = useState("")

    const [isEdited, setIsEdited] = useState(false)

    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("") 

    useEffect(() => {
        axios.get(`https://sheltered-taiga-69250.herokuapp.com/expenses/${props.expenseId}`)
        .then(res => {
            setIsLoading(false)

            setExpenseTitle(res.data.title)
            setExpenseValue(res.data.value)
            setExpenseDue(res.data.due)
        })
        .catch(e => {
            setErrorMessage("Someone stuffed up please refresh the page")
            setIsLoading(false)
        })
// eslint-disable-next-line
    }, [])


        function editExpense(){
            if(expenseTitle && expenseValue && expenseDue){
                axios.put(`https://sheltered-taiga-69250.herokuapp.com/expenses/${props.expenseId}`, {
                    expense: {
                        title: expenseTitle,
                        value: expenseValue,
                        due: expenseDue
                    }
                })
                .then(() => setIsEdited(true))
            } else {
                setErrorMessage("Please fill out the form")
            }
        }

        return (
            <div>
                {errorMessage && <h3>{errorMessage}</h3>}
                {!isLoading ?
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
                    placeholder="Expense Due"
                    value={expenseDue}
                    onChange={e => setExpenseDue(e.target.value)}
                    /> 
                  
                    <button onClick={editExpense}>Edit Expense</button>
                    </div> :
                    <h2>Loading...</h2>
}<Link to={`/AllExpenses`}>
          <Button variant="primary" size="lg">
            Back to Expenses
            </Button>
            </Link>
    {isEdited && <Redirect to={`/expenses/${props.expenseId}`}/>}
    </div>
        )

}

export default EditExpense
