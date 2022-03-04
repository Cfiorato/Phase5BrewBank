class CreateFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.integer :brewery_id
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
