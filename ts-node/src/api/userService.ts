type User = {
    id: number;
    name: string;
    email: string;
  };
  
  let users: User[] = []; // In-memory storage for users
  
  export const getAllUsers = () => users;
  
  export const createUser = (userData: Omit<User, 'id'>) => {
    const newUser: User = {
      id: users.length + 1,
      ...userData,
    };
    users.push(newUser);
    return newUser;
  };