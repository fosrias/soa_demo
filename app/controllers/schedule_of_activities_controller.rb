class ScheduleOfActivitiesController < ApplicationController
  expose(:activities) { Activity.all }
  expose(:tasks)      { Task.all }
  expose(:visits)     { Visit.ordered }
end