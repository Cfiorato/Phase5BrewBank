class SessionsController < ApplicationController
  skip_before_action :authorize_user, only: [:login]

  def login 
    user = User.find_by(username:params[:username])
    if user&.authenticate(params[:password])
      session[:current_user] = user.id
      byebug
      render json: user, status: :ok
    else
      render json: {error: "Invalid Password and/or Username"}
    end
  end

  def logout 
    session.delete :current_user
  end

end
