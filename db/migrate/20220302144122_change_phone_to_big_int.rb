class ChangePhoneToBigInt < ActiveRecord::Migration[6.1]
  def change
    change_column :breweries, :phone, :bigint
  end
end
