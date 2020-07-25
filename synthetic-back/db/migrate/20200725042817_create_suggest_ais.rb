class CreateSuggestAis < ActiveRecord::Migration[6.0]
  def change
    create_table :suggest_ais do |t|

      t.timestamps
    end
  end
end
