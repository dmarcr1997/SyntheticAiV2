class User < ApplicationRecord
    has_one :predict_ais
    has_one :recognize_ais
    has_one :sentament_ais
    has_one :suggest_ais
end
