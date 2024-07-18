/* eslint-disable simple-import-sort/imports */
'use client';

import { DatePicker, Form, Input, InputNumber, Modal } from 'antd';
import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { DataTablesContext } from '@/context/DataTablesContext';
import { ICheckItem } from '@/interfaces';

const AddCheckItem = () => {
  const { openAddCheckItemModal, setOpenAddCheckItemModal, addCheckItem } =
    useContext(DataTablesContext);
  const [form] = Form.useForm();

  const onAddItem = () => {
    form.validateFields().then((value) => {
      const item: ICheckItem = {
        id: uuidv4(),
        name: value.name,
        progress: Math.floor(Math.random() * 101),
        qty: value.qty,
        date: new Date(value.date)
      };
      addCheckItem(item);
      form.resetFields();
      setOpenAddCheckItemModal(false);
    });
  };

  return (
    <Modal
      title="Add Check Item"
      open={openAddCheckItemModal}
      onOk={onAddItem}
      onCancel={() => {
        setOpenAddCheckItemModal(false);
      }}
      closable={false}
      okText="Add"
    >
      <div className="mt-6">
        <Form layout="vertical" form={form}>
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input placeholder="Enter item's name" />
          </Form.Item>
          <Form.Item label="Quantity" name="qty" rules={[{ required: true }]}>
            <InputNumber min={1} className="!w-full" placeholder="Enter item's quantity" />
          </Form.Item>
          <Form.Item label="Date" name="date" rules={[{ required: true }]}>
            <DatePicker className="!w-full" />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default AddCheckItem;
