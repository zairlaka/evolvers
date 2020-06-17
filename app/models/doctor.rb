class Doctor < ApplicationRecord
    has_many :appointments, :dependent => :destroy #class_name: "app", foreign_key: "reference_id"

    enum specialist:  {"allergist" => "Allergist", "cardiologist" => "Cardiologist","gastroenterologists" => "Gastroenterologists", "ophthalmologists" => "Ophthalmologists", "pathologists" => "Pathologists", "radiologists" => "Radiologists"}
end
