module ApplicationHelper

  def activity_config(task, visit)
    id = "#{task.id}_#{visit.id}"
    html_class = "activity-missing"
    span = ''

    unless task.visits.empty?
      activity = task.activities.select { |activity| activity.visit_id == visit_id }
      html_class = "activity"
      html_class += " no-purpose" unless activity.purpose
      html_class += " footnotes" if activity.footnotes
    end
    {id: id, html_class: html_class, activity: activity}
  end
end
