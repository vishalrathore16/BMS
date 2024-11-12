import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> 

    // Inserts seed entries
     {
        // Deletes ALL existing entries
        return knex('staff').del()
          .then(function () {
            // Inserts seed entries
            return knex('staff').insert([
              {
                first_name: 'John',
                last_name: 'Doe',
                email: 'john.doe@example.com',
                phone_number: '555-1234',
                position: 'Manager',
                hire_date: '2020-01-15'
              },
              {
                first_name: 'Jane',
                last_name: 'Smith',
                email: 'jane.smith@example.com',
                phone_number: '555-5678',
                position: 'Developer',
                hire_date: '2021-06-10'
              },
              {
                first_name: 'Emily',
                last_name: 'Johnson',
                email: 'emily.johnson@example.com',
                phone_number: '555-8765',
                position: 'Designer',
                hire_date: '2022-03-22'
              },
              {
                first_name: 'Michael',
                last_name: 'Brown',
                email: 'michael.brown@example.com',
                phone_number: '555-4321',
                position: 'Sales',
                hire_date: '2019-11-30'
              },
              {
                first_name: 'Sarah',
                last_name: 'Davis',
                email: 'sarah.davis@example.com',
                phone_number: '555-7890',
                position: 'HR',
                hire_date: '2023-02-01'
              }
            ]);
          });
      };

