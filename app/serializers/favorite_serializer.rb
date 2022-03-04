class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :brewery_id
  has_one :user
end
