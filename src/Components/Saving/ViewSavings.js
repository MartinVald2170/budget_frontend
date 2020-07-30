import React, { useEffect, useState } from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import DeleteSaving from "./DeleteSaving"
import Button from "react-bootstrap/Button"

const ViewSavings = () => {
    const [savings, setSavings] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        axios.get("https://sheltered-taiga-69250.herokuapp.com/savings")
        .then(res => {
            setIsLoading(false)
            setSavings(res.data)
        })
        .catch(e => {
            setErrorMessage("There was a problem, please refresh and try again")
            setIsLoading(false)
        })
    }, [])

    function renderSavings(){
        return (
            
            
            <>
            <h2>All Saving Goals</h2>
            {savings.map((saving, index) => (
                <div className="SavingListing">
                <li key={`${saving}-${index}`}> 
                    {saving.title}
                    <Link to={`/savings/${saving.id}`}>
                    <Button variant="primary" size="lg">
                        View
                        </Button>
                        </Link>
                    <DeleteSaving
                    savingId={saving.id}
                    onDelete={() => setSavings(savings.filter((e, i) => e.id !== saving.id))}
                    />
                    </li>
                    </div>
            ))} 
            <br></br>
            <Link to={`/newSaving`}>
            <Button variant="primary" size="lg">
           Create Saving Goal
            </Button>
            </Link>

            <Link to={`/AllExpenses`}>
          <Button variant="primary" size="lg">
            View All Expenses
            </Button>
            </Link>
            </>
        )
    }


    return (
        <div>
            {errorMessage && <h3>{errorMessage}</h3>}
            {!isLoading ? renderSavings(): <h2>Loading Your Savings Relax</h2>}

        </div>
    )


}

export default ViewSavings