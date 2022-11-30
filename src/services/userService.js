import clientAxios from '../config/clientAxios';

export const userRegister = async (data) => {
  try {
    return await clientAxios.post('/createUser', data)
  } catch (error) {
    console.error(error);
  }
}