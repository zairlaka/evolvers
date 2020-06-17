json.extract! doctor, :id, :name, :phone, :specialist, :bio, :created_at, :updated_at
json.url doctor_url(doctor, format: :json)
