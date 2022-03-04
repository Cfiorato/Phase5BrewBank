class ChangeLatLongToFloat < ActiveRecord::Migration[6.1]
  def change
    change_column :breweries, :latitude, :float
    change_column :breweries, :longitude, :float
  end
end
