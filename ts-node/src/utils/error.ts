export const handleResponse = (data: any, message = 'Success', code = 200) => ({
    code, 
    message, 
    data, 
  });