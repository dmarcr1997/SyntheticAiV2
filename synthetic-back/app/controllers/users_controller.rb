class UsersController < ApplicationController
    def show
        user = User.find_by(id: params[:id])
        render json: UserSerializer.new(user)
    end

    def create
        puts "HERENOW"
        user = User.create(user_params)
        if user.save
            render json: UserSerializer.new(user)
        end
    end

    def edit
        user = user.find_by(id: params[:id])
        if user.save
            render json: UserSerializer.new(user)
        end
    end

    def destroy
        user = User.find_by(params[:id])
        User.delete(user)
    end

    

    private
    def user_params
        params.require(users).permit(:username, :password)
    end
end
