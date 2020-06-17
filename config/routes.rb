Rails.application.routes.draw do
  resources :appointments
  resources :doctors do
    collection do
      get 'check_available_doc'
    end
  end

  root to: 'doctors#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
