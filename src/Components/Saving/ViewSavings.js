import React, { useEffect, useState } from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import DeleteSaving from "./DeleteSaving"

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
            
            {savings.map((saving, index) => (
                <li key={`${saving}-${index}`}> 
                    {saving.title}
                    <Link to={`/savings/${saving.id}`}>View</Link>
                    <DeleteSaving
                    savingId={saving.id}
                    onDelete={() => setSavings(savings.filter((e, i) => e.id !== saving.id))}
                    />
                    </li>
            ))}<Link to={`/newSaving`}>Create Saving Goal</Link>
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