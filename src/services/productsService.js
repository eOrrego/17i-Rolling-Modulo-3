import clientAxios from '../config/clientAxios';

export const getAllProducts = async () => {
  try {
    return await clientAxios.get('/products')
  } catch (error) {
    console.error(error);
  }
}
export const createProducts = async (data) => {
  try {
    return await clientAxios.post('/createProduct', data)
  } catch (error) {
    console.error(error);
  }
}