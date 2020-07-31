import React from "react"
import {Link} from "react-router-dom"
import Button from "react-bootstrap/Button"
import "./LandingPage.css"

const LandingPage = () => {

    return(
      <header>
      <div>
          <h2>Btrackr</h2>
          <div className="Button">
          <Link to={`/AllSavings`}>
          <Button variant="primary" size="lg">
            View All Saving Goals
            </Button>
            </Link>
            </div>
            <br></br>
            <div className="Button2">
          <Link to={`/AllExpenses`}>
          <Button variant="primary" size="lg">
            View All Expenses
            </Button>
            </Link>
            </div>
          
          
        </div>
       </header>
    )

}


export default LandingPage