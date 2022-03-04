class BreweriesController < ApplicationController
  skip_before_action :authorize_user, only: [:index, :show]
  def index 
    breweries = Brewery.all 
    render json: breweries
  end

  def show 
    brewery = Brewery.find(params[:id])
    render json: brewery, include: [:comments]
  end
end
