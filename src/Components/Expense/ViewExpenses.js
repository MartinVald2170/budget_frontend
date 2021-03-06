import React, { useEffect, useState } from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import DeleteExpense from "./DeleteExpense"
import Button from "react-bootstrap/Button"

const ViewExpenses = () => {
    const [expenses, setExpenses] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        axios.get("https://sheltered-taiga-69250.herokuapp.com/expenses")
        .then(res => {
            setIsLoading(false)
            setExpenses(res.data)
        })
        .catch(e => {
            setErrorMessage("There was a problem, please refresh and try again")
            setIsLoading(false)
        })
    }, [])

    function renderExpenses(){
        return (
            <>
            <h2>All Upcoming Expenses</h2>
            
            {expenses.map((expense, index) => (
                <li key={`${expense}-${index}`}> 
                    {expense.title}
                    <Link to={`/expenses/${expense.id}`}>
                    <Button variant="primary" size="lg">
                    View 
                    </Button>
                    </Link>
                  
                    <DeleteExpense
                    expenseId={expense.id}
                    onDelete={() => setExpenses(expenses.filter((e, i) => e.id !== expense.id))}
                    />
                    </li>
                    
            ))}<br></br>
            <Link to={`/NewExpense`}>
          <Button variant="primary" size="lg">
            Create an Expense to Track
            </Button>
            </Link>
            
           
            <br></br>
            <Link to={`/AllSavings`}>
          <Button variant="primary" size="lg">
            View All Saving Goals
            </Button>
            </Link>
            </>
        )
    }


    return (
        <div>
            {errorMessage && <h3>{errorMessage}</h3>}
            {!isLoading ? renderExpenses(): <h2>Loading Your Expenses Relax</h2>}

        </div>
    )


}

export default ViewExpenses 