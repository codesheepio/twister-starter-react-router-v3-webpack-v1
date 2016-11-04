import React from 'react'
import ReactDOM from 'react-dom'
import customStyle from './styles/custom.scss'
import mainStyle from './styles/main.scss'
import NewTweet from './components/NewTweet'

const App = () => (
  <NewTweet />
)
ReactDOM.render(<App />, document.getElementById('react-root'))