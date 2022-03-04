class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :rating
  has_one :brewery
  has_one :user
end
