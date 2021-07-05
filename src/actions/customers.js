import CustomerService from "../services/CustomerServices";
import { types } from "../types/types";


export const createCustomer = (values) => async(dispatch) => {
    try {
        
        const res = await CustomerService.create(values);
    
        dispatch({
          type: types.CREATE_COSTUMER,
          payload: res.data,
        });
        return Promise.resolve(res.data);
      } catch (err) {          
        return Promise.reject(err);
      }
}

export const retrieveCustomers = () =>  {
      return async(dispatch) => {
          const res = await CustomerService.getAll();
          
          dispatch(setCustomers(res.data));
      }
     
}

export const setCustomers = (data) => ({
    type: types.RETRIEVE_COSTUMERS,
    payload: data,
})

export const updateCustomer = (pk, data) => {

return async(dispatch) =>{

    try {
        const res = await CustomerService.update(pk, data);
        
        dispatch(refreshNote(pk, res.data))
    
        return Promise.resolve(res.data);
      } catch (err) {
        return Promise.reject(err);
      }

}
}
export const refreshNote = (pk, customer) =>(
  
  {
  type: types.UPDATE_COSTUMER,
  payload: {
    pk,
    data: {
      ...customer
    }
  }
})


export const deleteCustomer = (pk) => {
  return async(dispatch) =>{

    try {
      await CustomerService.remove(pk);
      
      dispatch(removeCustomer(pk))   
      return Promise.resolve();

    } catch (err) {
      console.log(err);
      return Promise.reject(err);

    }
  }
}

export const removeCustomer = (pk) => ({
  type: types.DELETE_COSTUMER,
  payload: pk
});


export const setActivNote = (pk, data) => ({
        type: types.ACTIVE_COSTUMER,
        payload: {
            pk,
            ...data
        }
})

export const cleanActiveNote = () => ({
    type: types.CLEAN_ACTIVE_COSTUMER
})