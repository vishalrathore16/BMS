import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del();

  // Inserts seed entries
  await knex('users').insert([
    {
      first_name: 'yash',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123', // In a real application, ensure to hash passwords
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      first_name: 'ankit',
      last_name: 'Smith',
      email: 'jane.smith@example.com',
      password: 'password123',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      first_name: 'praveen',
      last_name: 'Johnson',
      email: 'alice.johnson@example.com',
      password: 'password123',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      first_name: 'ujjwal',
      last_name: 'Brown',
      email: 'bob.brown@example.com',
      password: 'password123',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
}