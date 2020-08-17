class ChangeCookTimeToBeStringInRecipes < ActiveRecord::Migration[6.0]
  def change
    change_column :recipes, :cook_time, :string

  end
end
