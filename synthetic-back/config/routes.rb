Rails.application.routes.draw do
  post 'signup', to: 'users#new'
  post 'login', to: 'users#show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
