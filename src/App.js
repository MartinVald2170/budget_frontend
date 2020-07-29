import React from 'react';
import ViewExpenses from './Components/Expense/ViewExpenses';
import ViewExpense from "./Components/Expense/ViewExpense"
import {BrowserRouter, Route} from "react-router-dom"
import CreateExpense from './Components/Expense/CreateExpense'
import EditExpense from "./Components/Expense/EditExpense"
import LandingPage from './LandingPage';
import ViewSavings from "./Components/Saving/ViewSavings"
import CreateSaving from "./Components/Saving/CreateSaving"
import ViewSaving from "./Components/Saving/ViewSaving"
import EditSaving from "./Components/Saving/EditSaving"

const App = () => {
  return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/AllExpenses" component={ViewExpenses} />
          <Route exact path="/AllSavings" component={ViewSavings} />
          <Route exact path="/newExpense" component={CreateExpense} />
          <Route exact path="/newSaving" component={CreateSaving} />
          <Route exact path="/expenses/:id" render={props => <ViewExpense expenseId={props.match.params.id}/>} />
          <Route exact path="/savings/:id" render={props => <ViewSaving savingId={props.match.params.id}/>} />
          <Route exact path="/expenses/:id/edit" render={props => <EditExpense expenseId={props.match.params.id}/>} />
          <Route exact path="/savings/:id/edit" render={props => <EditSaving savingId={props.match.params.id}/>} />
        </BrowserRouter>
     
      </div>
  )
}

export default App