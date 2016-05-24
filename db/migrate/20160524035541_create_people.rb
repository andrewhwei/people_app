class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :name
      t.string :bio
      t.boolean :bioVisible

      t.timestamps null: true
    end
  end
end
