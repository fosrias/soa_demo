class Activity < ActiveRecord::Base

  belongs_to :task
  belongs_to :visit

  def td_id
    "#{self.task_id}_#{self.visit_id}" if self.task_id && self.visit_id
  end
end
