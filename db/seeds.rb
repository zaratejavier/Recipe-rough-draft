# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


2.times do |i|
  user = User.create(email: "test#{i}@t.com", password: "12345678")

  5.times do 
    user.recipes.create(
      title: Faker::Food.dish , 
      ingridients: Faker::Food.ingredient, 
      directions: Faker::Food.description, 
      prep_time: rand(1..100),
      cook_time: rand(1..100),
     image: (Faker::Avatar.image(
            slug: (Faker::Hipster.word) , 
            size: "200x200", format: "bmp", 
            set: "set2", bgset: "bg1")),
    )
  end
end

puts "seeded!!!!!!!!!!!!!!!!"


# create_table "recipes", force: :cascade do |t|
#     t.string "title"
#     t.text "ingridients"
#     t.text "directions"
#     t.integer "prep_time"
#     t.integer "cook_time"
#     t.string "image"
#     t.bigint "user_id", null: false
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false
#     t.index ["user_id"], name: "index_recipes_on_user_id"
#   end
