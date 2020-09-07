class Api::CommentsController < ApplicationController
  before_action :set_recipe, only: [:create, :update, :destroy]
  # before_action :set_comment, only: [:update, :destroy, :create]

  def index
    # render json: @recipe.comments
    recipe = Recipe.find(params[:recipe_id])

    render json: recipe.comments.all  
  end

  # def show
  # end

  # def new
  # end

  def create
    comment = @recipe.comments.new(comment_params)
    # binding.pry

    if comment.save
      render json: comment
    else
      render json: {errors: comment.errors}, status: :unprocessble_entity
      binding.pry
    end

  end

  def update
    comment = @recipe.comments.find(params[:id])
    if comment.update(comment_params)
      render json: comment
    else
      render json: {errors: comment.errors}, status: :unprocessble_entity
    end
end

  # def update
  #   if @comment.update(comment_params)
  #     render json: @comment
  #   else
  #     render json: {errors: comment.errors}, status: :unprocessble_entity
  #   end
  # end

  def destroy
    render json: @recipe.comments.find(params[:id]).destroy
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :user_id)
  end
  
  # def set_comment
  #   @comment = Comment.find(params[:id])
  # end

  def set_recipe
    @recipe = Recipe.find(params[:recipe_id])
  end

end
