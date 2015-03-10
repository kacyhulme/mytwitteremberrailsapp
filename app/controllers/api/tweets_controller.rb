class Api::TweetsController < ApplicationController
  respond_to :json, :html

  def index
    @tweets = current_user.twitter.user_timeline
  end

  def show
    @tweet = current_user.twitter.status(params[:id])
  end
end
