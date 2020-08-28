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
    comment = @recipe.comments.new(comment_params)

    binding.pry
    if comment.save
      render json: comment
    else
      render json: {errors: comment.errors}, status: :unprocessble_entity
    end
  end

  def edit
  end

  def destroy
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :recipe_id, :user_id)
  end

  def set_recipe
    @recipe = Recipe.find(params[:recipe_id])
  end

end
