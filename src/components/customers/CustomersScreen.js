import React, { useEffect } from 'react'
import {  Space, Table } from 'antd';
import { Button } from 'antd';
import { Row, Col, Divider } from 'antd';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { cleanActiveNote, deleteCustomer, retrieveCustomers, setActivNote } from '../../actions/customers';
import useModal from '../../hooks/useModal';
import { ModalForm } from '../modal/ModalForm';

export const CustomersScreen = () => {
  const columns = [
    {
      key: "name",
      title: 'Name',
      dataIndex: 'name',
    },
    {
      key: "email",
      title: 'Email',
      dataIndex: 'email',
    },
    {
      key: "created",
      title: 'Date',
      dataIndex: 'created',
    },
    {
      title: 'Actions',
      render: (customer) => (
        <Space size="middle">
          <Button type="link" onClick={()=> selectedCustomer(customer)}>Edit</Button>
          <Button type="link" onClick={()=> todeleteCustomer(customer)}>Delete</Button>
        </Space>
      ),
    }
  ];
 
  const {customers} = useSelector(state => state.customer);
  const dispatch = useDispatch();

  console.log(customers);
  const {isShowing, toggle} = useModal();
  
  useEffect(() => {
    dispatch(retrieveCustomers())
  }, [dispatch])

  const selectedCustomer = (customer) =>{
     dispatch(setActivNote( customer.pk, customer))
     toggle();
  }

  const toAddCustomer = () =>{
    dispatch(cleanActiveNote());
    toggle();
  }

  const todeleteCustomer = (customer) => {
    dispatch(deleteCustomer( customer.pk));
  }


    return (
      <>
        <Row justify="space-between">

      <Col flex={3}>        <h4>Clientes</h4></Col>
      <Col  >   <Space orientation="right">
        
      <Button  type="primary"  onClick={toAddCustomer} >Agregar Cliente</Button>
        </Space> </Col>
        </Row>

     
      <Divider orientation="left"> </Divider>
        <div>

        {/* {
            (loading && <Spin indicator={antIcon}/> ) 
        }
        {
          (!loading &&  <Table columns={columns} pagination={false} dataSource={customers}  size="middle" /> )
        } */}

      <Table columns={columns} pagination={false}  rowKey={"pk"} dataSource={customers}   size="middle" />
      </div>
      <ModalForm isShowing={isShowing} toggle={toggle} />
      </>
    )
}
