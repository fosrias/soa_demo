module ApplicationHelper

  def activity_config(task, visit)
    id = "#{task.id}_#{visit.id}"
    html_classes = []

    unless task.visits.empty?
      activity = task.activities.select do |activity|

        activity.visit_id == visit_id
      end
      html_classes = html_classes_for(activity)
    end
    {id: id, html_classes: html_classes, activity: activity}
  end

  def html_classes_for(activity)
    html_classes = []
    html_classes.push("activity")
    html_classes.push("no-purpose") unless activity.purpose
    html_classes.push("footnotes") if activity.footnotes
  end
end
