class Api::RecipesController < ApplicationController
  before_action :set_recipe, only: [:show, :update, :destroy]
  def index
    render json: Recipe.all
  end

  def show
    render json: @recipe
  end

  def create
    recipe = current_user.recipes.new(recipe_params)
    # binding.pry
    if recipe.save
      render json: recipe
    else
      render json: recipe.errors, status: 422
    end
  end


  private
  def set_recipe
    @recipe = Recipe.find(params[:id])
  end

  def recipe_params
    params.require(:recipe).permit(:title, :ingridients, :directions, :prep_time, :cook_time)
  end
end

