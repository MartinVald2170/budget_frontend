import React, {useState} from "react"
import axios from "axios"
import {Redirect, Link} from "react-router-dom"

const CreateSaving = () => {

    const [savingTitle, setSavingTitle] = useState("")
    const [savingMax, setSavingMax] = useState()
    const [savingCurrent, setSavingCurrent] = useState()
    const [isCreated, setIsCreated] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    function createSaving(){
        if(savingTitle && savingMax && savingCurrent){
            axios.post(`https://sheltered-taiga-69250.herokuapp.com/savings`, {
                saving: {
                    title: savingTitle,
                    max: savingMax, 
                    current: savingCurrent
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
                placeholder="Saving for"
                value={savingTitle}
                onChange={e => setSavingTitle(e.target.value)}
            />
              <input
                placeholder="Saving Goal"
                value={savingMax}
                onChange={e => setSavingMax(e.target.value)}
            />
              <input
                placeholder="Currently Saved"
                value={savingCurrent}
                onChange={e => setSavingCurrent(e.target.value)}
            />
            <button onClick={createSaving}>Create a Saving Goal</button>
            {isCreated && <Redirect to="/AllSavings" />}
            {errorMessage}

            <Link to="/AllSavings">View Saving Goals</Link>
        </div>
    )
}


export default CreateSaving