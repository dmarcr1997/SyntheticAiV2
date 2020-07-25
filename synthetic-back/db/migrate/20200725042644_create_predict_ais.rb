class CreatePredictAis < ActiveRecord::Migration[6.0]
  def change
    create_table :predict_ais do |t|

      t.timestamps
    end
  end
end
