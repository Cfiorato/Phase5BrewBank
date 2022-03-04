class Comment < ApplicationRecord
  belongs_to :brewery
  belongs_to :user

  validates :comment, presence: true, length: { in: 3..150 }
  validates :rating, presence: true, numericality: { in: 1..5 }

end
