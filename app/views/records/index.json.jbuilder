json.array!(@records) do |record|
  json.extract! record, :id, :text
  json.url record_url(record, format: :json)
end
