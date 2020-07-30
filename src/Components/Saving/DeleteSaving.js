import React from "react"
import axios from "axios"
import Button from "react-bootstrap/Button"

const DeleteSaving = ({savingId, onDelete}) => {

    function deleteSaving(){
        axios.delete(`https://sheltered-taiga-69250.herokuapp.com/savings/${savingId}`)
            .then(onDelete)

        }
    
    return (
       
                   
                      
                       
                        
         <Button variant="primary" size="lg" onClick={deleteSaving}>X</Button>
    )
}


export default DeleteSaving 