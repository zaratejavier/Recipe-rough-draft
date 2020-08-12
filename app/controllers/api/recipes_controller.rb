class Api::RecipesController < ApplicationController
  before_action :set_recipe, only: [:show, :update, :destroy]
  def index
    render json: Recipe.all
  end

  def show
    render json: @recipe
  end

  private
  def set_recipe
    @recipe = Recipe.find(params[:id])
  end
end
