# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_25_042226) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "predict_ais", force: :cascade do |t|
    t.string "data"
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_predict_ais_on_user_id"
  end

  create_table "recognize_ais", force: :cascade do |t|
    t.string "data"
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_recognize_ais_on_user_id"
  end

  create_table "sentament_ais", force: :cascade do |t|
    t.string "data"
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_sentament_ais_on_user_id"
  end

  create_table "suggest_ais", force: :cascade do |t|
    t.string "data"
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_suggest_ais_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
  end

  add_foreign_key "predict_ais", "users"
  add_foreign_key "recognize_ais", "users"
  add_foreign_key "sentament_ais", "users"
  add_foreign_key "suggest_ais", "users"
end
