import React from 'react'
import ReactDOM from 'react-dom'
import customStyle from './styles/custom.scss'
import mainStyle from './styles/main.scss'
import MainLayout from './layouts/MainLayout'
import BodyContainer from './components/BodyContainer'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const App = () => (
  <Router history={ browserHistory }>
    <Route path='/' component={ MainLayout }>
        <IndexRoute component={ BodyContainer } />
        <Route path=':ownerUsername' component={ BodyContainer } />   
     </Route>
  </Router>
)
ReactDOM.render(<App />, document.getElementById('react-root'))