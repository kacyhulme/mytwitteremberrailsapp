OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  # provider :developer unless Rails.env.production?
  provider :twitter, "M4SjEcLHIpTY1CvaQGMTPq6aG", "t7DUxNL8Kr6u8jsRzv9oGrBkd0VK7mLwDyennsB7wrpUWE2gex"
  {
    :secure_image_url => 'true',
    :image_size => 'original',
    :authorize_params => {
      :force_login => 'true',
      :lang => 'pt'
    }
  }
end
