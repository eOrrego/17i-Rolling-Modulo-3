import clientAxios from '../config/clientAxios';

export const getAllProducts = async () => {
  try {
    return await clientAxios.get('/products')
  } catch (error) {
    console.error(error);
  }
}