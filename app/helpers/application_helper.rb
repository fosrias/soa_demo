module ApplicationHelper

  def cell_config(task, visit)
    id = "#{task.id}_#{visit.id}"
    activity = nil

    if task.visits.any?
      activity = task.activities.select { |a| a.visit_id == visit.id }.first
      id = activity.cell_id if activity
    end

    {id: id, html_classes: html_classes_for(activity), activity: activity}
  end

  def html_classes_for(activity)
    html_classes = []
    return html_classes unless activity
    #html_classes.push("activity")
    html_classes.push("no-purpose") if activity.purpose.blank?
    html_classes.push("footnotes") unless activity.footnotes.blank?
    html_classes
  end
end
