class CreateSentamentAis < ActiveRecord::Migration[6.0]
  def change
    create_table :sentament_ais do |t|

      t.timestamps
    end
  end
end
