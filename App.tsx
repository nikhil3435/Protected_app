import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import TodoApp from './todoapp/TodoApp'
import Calc from './calculator/Calc'
import ProtectedRoute from './ProtectedRoute'
import Login2 from './components/Login2'

const App = () => {
  return (
    <div className="App">
        <Switch>
          <ProtectedRoute exact path="/" comp={Home}/>
          <Route path="/login" component={Login2} />
          <ProtectedRoute exact path="/todo" comp={TodoApp} />
          <ProtectedRoute exact path="/calculator" comp={Calc} />
          <Route path="*">
            <div>Page not found</div>
          </Route>
        </Switch>
    </div>
  )
}

export default App
