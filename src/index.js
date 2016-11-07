import React from 'react'
import ReactDOM from 'react-dom'
import customStyle from './styles/custom.scss'
import mainStyle from './styles/main.scss'
import MainLayout from './layouts/MainLayout'
import BodyContainer from './components/BodyContainer'

const App = () => (
  <MainLayout>
    <BodyContainer ownerUsername="kaizerwing" />
  </MainLayout>
)
ReactDOM.render(<App />, document.getElementById('react-root'))