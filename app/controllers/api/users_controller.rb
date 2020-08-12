class Api::UsersController < ApplicationController
  before_action :authenticate_user!

  def update
    # update are user and add a photo
    user = User.find(params[:id]) #we find a user then we update the name and email
    user.name = params[:name] ? params[:name] : user.name
    user.email = params[:email] ? params[:email] : user.email

    file = params[:file] # we grab the file 

    puts "file"
    puts file
    puts "params"
    puts params

    if file && file != "undefined" && file != "" # we then see if that file is there
      begin
        # cloudinary stuff
        puts "in if"
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
        user.image = cloud_image["secure_url"]
      rescue => e
        render json: { errors: e, status: 422 }
        return
      end
    end

    if user.save
      render json: user
    else
      render json: { errors: user.errors, status: 422 }
    end
  end
end


