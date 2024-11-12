import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('staff', (table) => {
    table.increments('id').primary(); // Auto-incrementing primary key
    table.string('first_name').notNullable(); // First name field
    table.string('last_name').notNullable(); // Last name field
    table.string('email').notNullable().unique(); // Email field
    table.string('phone_number'); // Phone number field
    table.string('position').notNullable(); // Position field
    table.date('hire_date'); // Hire date field
    table.timestamps(true, true); // Created at and updated at timestamps
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('staff'); // Drop the staff table if it exists
}