import React, { Component } from 'react'
import NewTweet from './NewTweet'
import TweetList from './TweetList'

class MainPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'topscores',
      tweets: [],
    }
    this.addToTweetList = this.addToTweetList.bind(this)
  }
  componentDidMount() {
    const uri='http://150.107.29.233:3030/api/tweets'
    const filter=`{ "where": { "username": "${this.state.username}" }}`
    fetch(`${uri}?filter=${filter}`, {
      mode: 'cors',
    })
      .then(response => response.json())
      .then(tweets => {
        this.setState({
          tweets: tweets
        })
      })
  }
  addToTweetList(tweet) {
    let tweetWithId = tweet
    tweetWithId.id = this.state.tweets.length
    this.setState({
      tweets: [
        ...this.state.tweets,
        tweetWithId,
      ]
    })
  }
  render() {
    return (
      <div className="main-panel">
        <NewTweet
          name="Arnupharp"
          username="topscores"
          addToTweetList={this.addToTweetList}
        />
        <TweetList tweets={this.state.tweets} />
      </div>
    )
  }
}

export default MainPanel