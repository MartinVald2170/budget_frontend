import React, {useState, useEffect} from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'



const EditSaving = (props) => {

    const [savingTitle, setSavingTitle] = useState("")
    const [savingMax, setSavingMax] = useState()
    const [savingCurrent, setSavingCurrent] = useState()

    const [isEdited, setIsEdited] = useState(false)

    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("") 

    useEffect(() => {
        axios.get(`https://sheltered-taiga-69250.herokuapp.com/savings/${props.savingId}`)
        .then(res => {
            setIsLoading(false)

            setSavingTitle(res.data.title)
            setSavingMax(res.data.max)
            setSavingCurrent(res.data.current)
        })
        .catch(e => {
            setErrorMessage("Someone stuffed up please refresh the page")
            setIsLoading(false)
        })
// eslint-disable-next-line
    }, [])


        function editSaving(){
            if(savingTitle && savingMax && savingCurrent){
                axios.put(`https://sheltered-taiga-69250.herokuapp.com/savings/${props.savingId}`, {
                    saving: {
                        title: savingTitle,
                        max: savingMax,
                        current: savingCurrent
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
                    placeholder="Saving Goal Title"
                    value={savingTitle}
                    onChange={e => setSavingTitle(e.target.value)}
                    /> 
                    <input 
                    placeholder="Money to be Saved"
                    value={savingMax}
                    onChange={e => setSavingMax(e.target.value)}
                    /> 
                    <input 
                    placeholder="Currently Saved"
                    value={savingCurrent}
                    onChange={e => setSavingCurrent(e.target.value)}
                    /> 
                    <button onClick={editSaving}>Submit</button>
                    </div> :
                    <h2>Loading...</h2>
}
    <Link to="/AllSavings">View Savings</Link>
    {isEdited && <Redirect to={`/savings/${props.savingId}`}/>}
    </div>
        )

}

export default EditSaving