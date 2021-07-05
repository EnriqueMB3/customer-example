import http from "../http-common";




const getAll = () => {
  return http.get("/customer/");
};

const get = id => {
  return http.get(`/customer/${id}/`);
};

const create = (data) => {
  return http.post("/customer/create/", data);
};

const update = (id, data) => {
  return http.put(`/customer/update/${id}/`, data);
};

const remove = id => {
  return http.delete(`/customer/delete/${id}/`);
};

// const removeAll = () => {
//   return http.delete(`/customers`);
// };


const CustomerService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default CustomerService;