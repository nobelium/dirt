#!/usr/bin/env ruby

module Dirt

  class ProfileController < Dirt::Controller
    def show(params, session)
      
      haml :user  
    end

    def edit(params, session)
      haml :user_edit
    end

  end
end