class TweetsController < ApplicationController
  def index
    @tweet = current_user.twitter.search("rails", result_type: "recent").first
  end
end
