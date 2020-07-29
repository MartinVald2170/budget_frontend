import React from "react"
import {Link} from "react-router-dom"
import Button from "react-bootstrap/Button"
import "./LandingPage.css"

const LandingPage = () => {

    return(
      <div>
          <h2>Btrackr</h2>
          <div>
          <Link to={`/AllSavings`}>
          <Button variant="primary" size="lg">
            View All Saving Goals
            </Button>
            </Link>
            </div>
            <br></br>
            <div>
          <Link to={`/AllExpenses`}>
          <Button variant="primary" size="lg">
            View All Expenses
            </Button>
            </Link>
            </div>
          
          
        </div>
       
    )

}


export default LandingPage