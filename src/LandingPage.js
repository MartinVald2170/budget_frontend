import React from "react"
import {Link} from "react-router-dom"

const LandingPage = () => {

    return(
        <div>
          <h2>Landing Page</h2>  
          <Link to={`/AllSavings`}>View All Saving Goals</Link>
          <br></br>
          <Link to={`/AllExpenses`}>View All Expenses</Link>
        </div>
        
    )

}


export default LandingPage