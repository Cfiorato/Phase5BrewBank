Rails.application.routes.draw do
  
  resources :comments
  resources :breweries, only: [:index, :show]
  resources :favorites, only: [:index, :create]
  resources :users, only: [:show, :create, :update, :destroy]
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'
  get '/authorized_user', to: 'users#show'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
