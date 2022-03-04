class Brewery < ApplicationRecord
  has_many :comments
  has_many :favorites

  def avg_rating
    ratings = self.comments.map do |comment|
      comment.rating
    end
    total = 0.0
    ratings.each do |rating|
      total += rating
    end
    total / ratings.length
  end
end
