class Api::UsersController < ApplicationController
  before_action :authenticate_user!
  def update
    binding.pry
  end
end
