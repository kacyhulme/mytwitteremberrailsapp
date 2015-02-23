class User < ActiveRecord::Base
  def self.from_omniauth(auth)
    user = where(provider: auth.provider, uid: auth.uid).first || create_from_omniauth(auth)
    user.oauth_token = auth["credentials"]["token"]
    user.oauth_secret = auth["credentials"]["secret"]
    user.save!
    user
  end

  def self.create_from_omniauth(auth)
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.name = auth["info"]["nickname"]
    end
  end

  def twitter
    if provider == "twitter"
      @twitter ||= Twitter::REST::Client.new do |config|
        config.consumer_key        = "M4SjEcLHIpTY1CvaQGMTPq6aG"
        config.consumer_secret     = "t7DUxNL8Kr6u8jsRzv9oGrBkd0VK7mLwDyennsB7wrpUWE2gex"
        config.access_token        = oauth_token
        config.access_token_secret = oauth_secret
      end
    end
  end
end
