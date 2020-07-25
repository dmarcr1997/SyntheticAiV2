class CreatePredictAi < ActiveRecord::Migration[6.0]
  def change
    create_table :predict_ais do |t|
      t.string :data
      t.references :user, null: false, foreign_key: true
    end
  end
end
