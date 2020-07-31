class Api::RecipesController < ApplicationController
  def index
    Recipe.all
  end
end
