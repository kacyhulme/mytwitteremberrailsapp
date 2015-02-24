class Api::TweetsController < ApplicationController
  respond_to :json, :html

  def index
    @tweets = current_user.twitter.user_timeline.take(40)
    render json: {tweets: @tweets.map { |tweet| {id: tweet.id, text: tweet.text, retweet_count: tweet.retweet_count, user_name: tweet.user.name, location: tweet.user.location} }}
  end
end
