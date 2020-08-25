class Api::CommentsController < ApplicationController
  before_action :set_recipe

  def index
    render json: @recipe.comments
  end

  def show
  end

  def new
  end

  def create
  end

  def edit
  end

  def destroy
  end

  private
    def set_recipe
      @recipe = Recipe.find(params[:recipe_id])
    end
end
