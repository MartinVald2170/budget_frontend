import React, { useEffect, useState } from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import Button from "react-bootstrap/Button"


const ViewExpense = (props) => {

    const [expense, setExpense] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        axios.get(`https://sheltered-taiga-69250.herokuapp.com/expenses/${props.expenseId}`)
        .then(res => {
            setIsLoading(false)
            setExpense(res.data)
        })
        .catch(e => {
            setErrorMessage("There was a problem, please refresh and try again")
            setIsLoading(false)
        })
    },)

   

    return (
        <div>
            {errorMessage && <h3>{errorMessage}</h3>}
            {!isLoading ? 
                <li> {expense.title} is due {expense.due} at {expense.value} dollars</li> :
                <h2>Loading Your Expense Relax</h2>}
               
                <br></br>
                <Link to={`/expenses/${expense.id}/edit`}>
                <Button variant="primary" size="lg">
                Edit
                </Button>
                </Link>
               <Link to={`/AllExpenses`}>
                <Button variant="primary" size="lg">
                View All Expenses
                </Button>
                </Link>

        </div>
    )


}

export default ViewExpense 