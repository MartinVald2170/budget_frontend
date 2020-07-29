import React from "react"
import axios from "axios"

const DeleteSaving = ({savingId, onDelete}) => {

    function deleteSaving(){
        axios.delete(`https://sheltered-taiga-69250.herokuapp.com/savings/${savingId}`)
            .then(onDelete)

        }
    
    return (
        <button onClick={deleteSaving}>X</button>
    )
}


export default DeleteSaving 