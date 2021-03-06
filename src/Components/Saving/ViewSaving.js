import React, { useEffect, useState } from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import Button from "react-bootstrap/Button"


const ViewSaving = (props) => {

    const [saving, setSaving] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        axios.get(`https://sheltered-taiga-69250.herokuapp.com/savings/${props.savingId}`)
        .then(res => {
            setIsLoading(false)
            setSaving(res.data)
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
                <li> you currently have {saving.current} dollars saved out of {saving.max} for your saving goal of {saving.title}</li> :
                <h2>Loading Your Saving Goal Relax</h2>}
                  
                <br></br>
                <Link to={`/savings/${saving.id}/edit`}>
            <Button variant="primary" size="lg">
           Edit
            </Button>
            </Link>
               <Link to={`/AllSavings`}>
            <Button variant="primary" size="lg">
           Back to Saving Goals
            </Button>
            </Link>

        </div>
    )


}

export default ViewSaving