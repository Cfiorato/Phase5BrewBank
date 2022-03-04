class CreateBreweries < ActiveRecord::Migration[6.1]
  def change
    create_table :breweries do |t|
      t.string :name
      t.string :brewery_type
      t.string :street
      t.string :city
      t.string :state
      t.integer :postal_code
      t.string :country
      t.integer :longitude
      t.integer :latitude
      t.integer :phone
      t.string :website
      t.string :image

      t.timestamps
    end
  end
end
