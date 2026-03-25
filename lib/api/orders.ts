import client from './client';

export const getOrders = async () => {
  const response = await client.get('/orders');
  return response.data;
};

export const getOrderById = async (id: string) => {
  const response = await client.get(`/orders/${id}`);
  return response.data;
};

export const cancelOrder = async (id: string) => {
  const response = await client.post(`/orders/${id}/cancel`);
  return response.data;
};
