class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize_user

  def current_user
    byebug
    User.find_by(id: session[:current_user])
  end

  def authorize_user 
    byebug
    render json: {error: "Not authorized"}, status: :unauthorized unless current_user
  end

end
