class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :title
      t.text :ingridients
      t.text :directions
      t.integer :prep_time
      t.integer :cook_time
      t.string :image
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
