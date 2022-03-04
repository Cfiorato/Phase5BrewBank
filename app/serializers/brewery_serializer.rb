class BrewerySerializer < ActiveModel::Serializer
  attributes :id, :name, :brewery_type, :street, :city, :state, :postal_code, :country, :longitude, :latitude, :phone, :website, :image, :comments, :avg_rating
  def comments
    self.object.comments.map do |comment|
      {user: comment.user.username,
      comment: comment.comment,
      rating: comment.rating,
      posted_at: comment.created_at
    }
    end
  end
end
