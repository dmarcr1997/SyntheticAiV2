class CreateRecognizeAis < ActiveRecord::Migration[6.0]
  def change
    create_table :recognize_ais do |t|

      t.timestamps
    end
  end
end
