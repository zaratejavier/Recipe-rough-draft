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

  def update
      if @recipe.update(recipe_params)
        render json: @recipe
      else
        render json: recipe.errors, status: 422
      end
    end
  end

  def destroy
    @recipe.destroy
  end


  private
  def set_recipe
    @recipe = Recipe.find(params[:id])
  end

  def recipe_params
    params.require(:recipe).permit(:title, :ingridients, :directions, :prep_time, :cook_time)
  end
end

# 1 Chicken (4 boneless Breast),\n2 can cream of mushroom,\n1 can cream of chicken,\n3/4 cup slivered almonds(opt),\n3 cups celery,\n1/2 cup onion(chopped),\n1 can Chow Mein Noodles(or rice)\n

# add mushrooms, chestnuts, sprouts, etc. To taste. Cook chicken reserve 2 cups broth. Cut into large chunks. Add remaining ingrediants. (expect noodles). Bake for 1 hour at 325 degrees

# Chicken Chow Mein Casserole