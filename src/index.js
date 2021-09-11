import React from 'react'
import ReactDOM from 'react-dom'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
 } from 'react-router-dom'

 import routes from 'routes'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {routes.map(route => <Route {...route} />)}
        {/* <Route exact path="/" component={ListPokemos} />
        <Route exact path="/details/:name" component={Details} /> */}
        <Redirect to="/" />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
