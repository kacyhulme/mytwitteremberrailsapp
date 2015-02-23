class TweetsController < ApplicationController
  def index
    @tweets = current_user.twitter.search("rails", result_type: "recent").take(3)
  end
end
