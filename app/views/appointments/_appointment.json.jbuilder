json.extract! appointment, :id, :start_time, :end_time, :doctor_id, :created_at, :updated_at
json.url appointment_url(appointment, format: :json)
