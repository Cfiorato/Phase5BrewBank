class AddBreweryToFavorites < ActiveRecord::Migration[6.1]
  def change
    remove_column :favorites, :brewery_id
    add_belongs_to :favorites, :brewery, foreign_key: true
  end
end
