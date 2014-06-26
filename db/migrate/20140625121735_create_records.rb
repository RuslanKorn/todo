class CreateRecords < ActiveRecord::Migration
  def change
    create_table :records do |t|
      t.string :text

      t.timestamps
    end
  end
end
