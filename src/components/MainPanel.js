import React, { Component } from 'react'
import NewTweet from './NewTweet'
import TweetList from './TweetList'

class MainPanel extends Component {
  constructor(props) {
    super(props)
    this.addToTweetList = this.addToTweetList.bind(this)
  }
  addToTweetList(tweet) {
    let tweetWithId = tweet
    tweetWithId.id = this.state.tweet.length
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