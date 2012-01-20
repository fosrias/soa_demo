class ActivitiesController < ApplicationController
  respond_to :html, :json, :js

  before_filter :show_activity, :only => :new

  expose(:activity)
  expose(:activities) { Activity.all }

  def new
    respond_to do |format|
      format.js do
        render :new
      end
    end
  end

  # POST /activities
  # POST /activities.json
  def create
    flash[:notice] = "Activity was successfully created." if activity.save
    respond_with(activity)
  end

  # PUT /activities/1
  # PUT /activities/1.json
  def update
    flash[:notice] = "Activity was successfully updated." if activity.save
    respond_with(activity)
  end

  # DELETE /activities/1
  # DELETE /activities/1.json
  def destroy
    activity.destroy
    respond_with(activity)
  end

  private
  def show_activity
    true
  end
end
