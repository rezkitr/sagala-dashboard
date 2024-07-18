/* eslint-disable simple-import-sort/imports */
'use client';

import { DatePicker, Form, Input, Modal, Select } from 'antd';
import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { DataTablesContext } from '@/context/DataTablesContext';
import { IComplexItem } from '@/interfaces';
import { statusTypeData } from '@/utils/config';

const AddComplexItem = () => {
  const { openAddComplexItemModal, setOpenAddComplexItemModal, addComplexItem } =
    useContext(DataTablesContext);
  const [form] = Form.useForm();

  const onAddItem = () => {
    form.validateFields().then((value) => {
      const item: IComplexItem = {
        id: uuidv4(),
        name: value.name,
        status: value.status,
        date: new Date(value.date),
        progress: Math.floor(Math.random() * 101)
      };
      addComplexItem(item);
      form.resetFields();
      setOpenAddComplexItemModal(false);
    });
  };

  return (
    <Modal
      title="Add Development Item"
      open={openAddComplexItemModal}
      onOk={onAddItem}
      onCancel={() => {
        setOpenAddComplexItemModal(false);
      }}
      closable={false}
      okText="Add"
    >
      <div className="mt-6">
        <Form layout="vertical" form={form}>
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input placeholder="Enter item's name" />
          </Form.Item>
          <Form.Item label="Status" name="status" rules={[{ required: true }]}>
            <Select
              placeholder="Select item's status"
              options={[
                { value: statusTypeData.success.key, label: statusTypeData.success.label },
                { value: statusTypeData.error.key, label: statusTypeData.error.label },
                { value: statusTypeData.disable.key, label: statusTypeData.disable.label }
              ]}
            />
          </Form.Item>
          <Form.Item label="Date" name="date" rules={[{ required: true }]}>
            <DatePicker className="!w-full" />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default AddComplexItem;
