import React from 'react'
import ReactDOM from 'react-dom'
import customStyle from './styles/custom.scss'
import mainStyle from './styles/main.scss'
import Profile from './components/Profile'

const App = () => (
  <Profile
    name="Arnupharp Viratanapanu"
    username="topscores"
    numTweets={123}
    numFollowers={50}
    numFollowings={100}
    isFollowing
    isOwnProfile
    toggleFollow={() => {console.log("toggle click")}}
  />
)
ReactDOM.render(<App />, document.getElementById('react-root'))