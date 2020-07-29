import React from 'react';
import ViewExpenses from './ViewExpenses';
import ViewExpense from "./ViewExpense"
import {BrowserRouter, Route} from "react-router-dom"
import CreateExpense from './CreateExpense'
import EditExpense from "./EditExpense"

const App = () => {
  return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={ViewExpenses} />
          <Route exact path="/new" component={CreateExpense} />
          <Route exact path="/expenses/:id" render={props => <ViewExpense expenseId={props.match.params.id}/>} />
          <Route exact path="/expenses/:id/edit" render={props => <EditExpense expenseId={props.match.params.id}/>} />
        </BrowserRouter>
     
      </div>
  )
}

export default App