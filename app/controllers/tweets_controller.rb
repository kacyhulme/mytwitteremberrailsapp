class TweetsController < ApplicationController
  respond_to :json, :html

  def index
    @tweet = current_user.twitter.search("rails", result_type: "recent").first
    respond_with tweets: [{text: @tweet.text, user: current_user.name, id: 1}]
  end
end
