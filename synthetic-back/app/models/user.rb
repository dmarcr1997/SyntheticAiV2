class User < ApplicationRecord
    has_one :predict_ai
    has_one :recognize_ai
    has_one :sentament_ai
    has_one :suggest_ai

    def password=(pass)
        self.password_digest = pass
    end
end
