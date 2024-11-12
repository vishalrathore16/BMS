import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
return knex.schema.createTable('roles', table => {
    table.increments('id').primary();
    table.string('email').unique().notNullable();
    table.string('password').notNullable(); // hashed password
    table.string('role').defaultTo('user'); // user roles, e.g., 'user', 'admin'
    table.timestamps(true, true); // created_at and updated_at
  });
};


export async function down(knex: Knex): Promise<void> {
}

