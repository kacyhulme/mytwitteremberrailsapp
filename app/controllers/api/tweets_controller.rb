class Api::TweetsController < ApplicationController
  respond_to :json, :html

  def index
    @tweets = current_user.twitter.user_timeline.take(40)
    render json: {tweets: @tweets.map { |tweet| {
                                          id: tweet.id,
                                          text: tweet.text,
                                          retweet_count: tweet.retweet_count,
                                          user_name: tweet.user.name,
                                          location: tweet.user.location,
                                          description: tweet.user.description,
                                          followers_count: tweet.user.followers_count,
                                          friends_count: tweet.user.friends_count
                                        }
                  }
                 }
  end

  def show
    tweet = current_user.twitter.user_timeline.first
    render json: {tweet: {
                    id: 1,
                    text: tweet.text,
                    retweet_count: tweet.retweet_count,
                    user_name: tweet.user.name,
                    location: tweet.user.location,
                    description: tweet.user.description,
                    followers_count: tweet.user.followers_count,
                    friends_count: tweet.user.friends_count
                  }
                 }

  end
end
