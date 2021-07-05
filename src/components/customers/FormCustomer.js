import React from 'react';
import { Form, Input, Button, notification   } from 'antd';
import "./customer.css"
import { useDispatch, useSelector } from 'react-redux';
import { createCustomer, updateCustomer } from '../../actions/customers';


export const FormCustomer = ({toggle}) => {

    
    
    const {active} = useSelector(state=> state.customer);

    const openNotificationWithIcon = (type, msg) => {
      notification[type]({
        message: type === 'info'? "Customer Actualizado" : "Customer Agregado",
        duration: 3,
        description:
          msg,
      });
    };

    const dispatch = useDispatch()
    
    const onFinish = async(values) => {

      if (active) {
     
       
        dispatch(updateCustomer(active.pk, values))
        toggle();
        openNotificationWithIcon('info', 'Customer ha sido actualizado con éxito');

      }else{
        
        dispatch(createCustomer(values))
        toggle();
        openNotificationWithIcon('success', 'Customer ha sido agregado con éxtio');
      }
        
    };
    
    const onFinishFailed = (errorInfo, values) => {
        console.log('Failed:', errorInfo, values);
    };
    
    
    const tailLayout = {
        wrapperCol: {
            offset: 20,
            span: 20,
        },
    };
    
    const [form] = Form.useForm();
  
    const formValues = active? {
        name: active.name,
        email: active.email
    }:{
        name:"",
        email:""
    }
    
    form.setFieldsValue(formValues);

    return (
        <Form onFinish={onFinish} form={form} onFinishFailed={onFinishFailed}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input  />
        </Form.Item>
  



        <Form.Item
          label="Email"
          name="email"
          
          rules={[{ required: true, message: 'Please input your email!', type: "email" }]}
        >
          <Input   />
        </Form.Item>
        <Form.Item  {...tailLayout}>
        <Button  type="primary" id="submitButton" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
        </Form>
    )
}
