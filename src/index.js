import React from 'react'
import ReactDOM from 'react-dom'
import customStyle from './styles/custom.scss'
import mainStyle from './styles/main.scss'
import BodyContainer from './components/BodyContainer'

const App = () => (
  <BodyContainer ownerUsername="kaizerwing" />
)
ReactDOM.render(<App />, document.getElementById('react-root'))