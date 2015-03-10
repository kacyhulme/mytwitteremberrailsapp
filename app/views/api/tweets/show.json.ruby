tweet = {
    id: @tweet.attrs[:id_str],
    text: @tweet.text,
    retweet_count: @tweet.retweet_count,
    user_name: @tweet.user.name,
    location: @tweet.user.location,
    description: @tweet.user.description,
    followers_count: @tweet.user.followers_count,
    friends_count: @tweet.user.friends_count
}

tweet.to_json
