class UsersController < ApplicationController
  skip_before_action :authorize_user, only: [:create, :show]

  def show 
    byebug
    if session[:current_user]
      render json: current_user, status: :ok
    else
      render json: "No current user set", status: :unauthorized
    end
  end

  def create 
    user = User.create!(user_params)
    render json: user, status: :created
  rescue ActiveRecord::RecordInvalid => invalid 
    render json: { errors: invalid.record.errors }, status: :unprocessable_entity
  end

  private  

  def user_params
    params.permit(:name, :username, :password)
  end
  
end
