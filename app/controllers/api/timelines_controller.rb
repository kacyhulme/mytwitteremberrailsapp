class Api::TimelinesController < ApplicationController
  respond_to :json, :html

  def index
    @timelines = current_user.twitter.home_timeline.take(40)
    respond_with @timelines
    # render json: { timelines: @timelines.map { |timeline| {
    #                                            id: timeline.attrs[:id_str],
    #                                            text: timeline.text,
    #                                            screen_name: timeline.user.screen_name,
    #                                            location: timeline.user.location,
    #                                            description: timeline.user.description,
    #                                            url: timeline.user.url,
    #                                            followers_count: timeline.user.followers_count,
    #                                            friends_count: timeline.user.friends_count
    #                                          }
    #                }
    #              }
  end
end
