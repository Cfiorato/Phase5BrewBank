class User < ApplicationRecord
  has_many :comments
  has_many :favorites
  has_secure_password

  PASSWORD_FORMAT = /\A
  (?=.{8,})          # Must contain 8 or more characters
  (?=.*\d)           # Must contain a digit
  (?=.*[a-z])        # Must contain a lower case character
  (?=.*[A-Z])        # Must contain an upper case character
/x


  validates :username, 
    presence: true, 
    uniqueness: true

  validates :password, 
    presence: true,
    format: PASSWORD_FORMAT

end
