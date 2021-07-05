import React from 'react';
import { Modal } from 'antd';
import { FormCustomer } from '../customers/FormCustomer';
import { useDispatch, useSelector } from 'react-redux';
import { cleanActiveNote } from '../../actions/customers';

export const ModalForm = ({isShowing, toggle}) => {
 
    const {active} = useSelector(state=> state.customer);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(cleanActiveNote);
        toggle();
    }

    return (
        <>
       
        <Modal
          visible={isShowing}
          title={active? "Editar Customer": "Agregar Customer"}
          onCancel={handleClose}
          footer={null}
          >
         
         <FormCustomer  toggle={handleClose} ></FormCustomer>
        
        </Modal>
         
      </>
    )
}
