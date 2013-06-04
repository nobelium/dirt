#!/usr/bin/env ruby

require "sequel"

module Dirt
  class Project < Sequel::Model(Dirt::DIRT_DB)
    set_primary_key :user_id

    def self.persist(args = {})
          
    end

    
  end 
end
