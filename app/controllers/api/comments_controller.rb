class Api::CommentsController < ApplicationController
  before_action :set_recipe
  before_action :set_comment, only: [:update, :destroy]

  def index
    render json: @recipe.comments
  end

  def show
  end

  def new
  end

  def create
    comment = @recipe.comments.new(comment_params)

    if comment.save
      render json: comment
    else
      render json: {errors: comment.errors}, status: :unprocessble_entity
    end
    binding.pry

  end

  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: {errors: comment.errors}, status: :unprocessble_entity
    end
  end

  def destroy
  end

  private

  def set_comment
    @comment = Comment.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:body, :recipe_id, :user_id)
  end

  def set_recipe
    @recipe = Recipe.find(params[:recipe_id])
  end

end
