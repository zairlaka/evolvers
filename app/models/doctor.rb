class Doctor < ApplicationRecord
    has_many :appointments, :dependent => :destroy #class_name: "app", foreign_key: "reference_id"

    scope :are_free, ->(s,e) { left_outer_joins(:appointments).where('appointments.end_time <=  ? or appointments.start_time >= ?  or doctor_id is NULL',DateTime.parse(s),DateTime.parse(e)) }

    enum specialist:  {"allergist" => "Allergist", "cardiologist" => "Cardiologist","gastroenterologists" => "Gastroenterologists", "ophthalmologists" => "Ophthalmologists", "pathologists" => "Pathologists", "radiologists" => "Radiologists"}
end
