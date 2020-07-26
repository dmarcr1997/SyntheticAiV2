class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :predict_ai, :recognize_ai, :sentament_ai, :suggest_ai
end
