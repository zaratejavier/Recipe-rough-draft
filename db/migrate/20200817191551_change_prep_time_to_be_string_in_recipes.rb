class ChangePrepTimeToBeStringInRecipes < ActiveRecord::Migration[6.0]
  def change
    change_column :recipes, :prep_time, :string
  end
end
