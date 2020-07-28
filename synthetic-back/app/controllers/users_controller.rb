class UsersController < ApplicationController
    def show
        user = User.find_by(username: user_params[:username])
        binding.pry
        render json: UserSerializer.new(user)
    end

    def new
        puts "HERENOW"
        user = User.create(user_params)
        binding.pry
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
        params.require(:users).permit(:username, :password)
    end
end
