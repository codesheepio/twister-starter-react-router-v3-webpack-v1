  const serverIp = '150.107.29.233'
  const port = '3030'
  const fetchTweets = (username) => {
    return new Promise((resolve, reject) => {
      const uri=`http://${serverIp}:${port}/api/tweets`
      const filter=`{ "where": { "username": "${username}" }}`
      fetch(`${uri}?filter=${filter}`, {mode: 'cors'})
        .then(response => response.json())
        .then(tweets => resolve(tweets))
    })
  }

  const fetchProfile = (username) => {
    return new Promise((resolve, reject) => {
      const uri = `http://${serverIp}:${port}/api/TwisterUsers/${username}`
      fetch(uri, {mode: 'cors'})
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText)
          }
          return response.json()
        })
        .then(profile => resolve(profile))
        .catch(err => reject(err))
    })
  }

  const fetchFollowStatus = (username, followedUsername) => {
    return new Promise((resolve, reject) => {
      // Cannot follow oneself
      if (username === followedUsername) {
        resolve(false)
      }

      const uri = `http://${serverIp}:${port}/api/Follows/count?where={"username":"${username}","followedUsername":"${followedUsername}", "isFollowing": true}`
      fetch(uri, {mode: 'cors'})
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText)
          }
          return response.json()
        })
        .then((json) => {
          if (json.count === 0) {
            resolve(false)
          } else {
            resolve(true)
          }
        })
        .catch(err => reject(err))
    })
  }

const follow = (username, followedUsername) => {
  return new Promise((resolve, reject) => {
    const uri = `http://${serverIp}:${port}/api/Follows/upsertWithWhere?where={"username":"${username}", "followedUsername":"${followedUsername}"}`
    fetch(uri, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({
        username,
        followedUsername,
        isFollowing: true,
      }),
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
    .then((data) => {
      resolve(true)
    })
    .catch(err => reject(err))
  })
}

const unfollow = (username, followedUsername) => {
  return new Promise((resolve, reject) => {
    const uri = `http://${serverIp}:${port}/api/Follows/upsertWithWhere?where={"username":"${username}","followedUsername":"${followedUsername}"}`
    fetch(uri, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({
        username,
        followedUsername,
        isFollowing: false,
      }),
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
    .then((data) => {
      resolve(false)
    })
    .catch(err => reject(err))
  })
}

export {
  fetchTweets,
  fetchProfile,
  fetchFollowStatus,
  follow,
  unfollow,
}