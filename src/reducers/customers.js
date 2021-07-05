import { types } from '../types/types'


const initialState = {
    customers:[],
    active:null
};



export const customers = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.CREATE_COSTUMER:
            return {
                ...state,
                customers: [ payload, ...state.customers ]
            }

        case types.RETRIEVE_COSTUMERS:
            return {
                ...state,
                customers: [...payload]
            };
        
        case types.UPDATE_COSTUMER:
            return {
                ...state,
                customers: state.customers.map(
                    customer=> customer.pk === payload.pk ? payload.data : customer)
            }
        case types.DELETE_COSTUMER:
            return {
                ...state,
                customers: state.customers.filter(customer =>customer.pk !== payload)
            }

        case types.ACTIVE_COSTUMER:
                return {
                    ...state,
                    active: {
                        ...payload
                    }
                }

        case types.CLEAN_ACTIVE_COSTUMER:
            return {
                ...state,
                active:null
            }
        default:
            return customers;
    }


}

