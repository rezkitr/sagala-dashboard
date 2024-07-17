/* eslint-disable simple-import-sort/imports */
'use client';

import { DatePicker, Form, Input, Modal, Select } from 'antd';
import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { DataTablesContext } from '@/context/DataTablesContext';
import { IDevelopmentItem } from '@/interfaces';
import { techTypeData } from '@/utils/config';

const AddDevelopmentItem = () => {
  const { openAddDevelopmentItemModal, setOpenAddDevelopmentItemModal, addDevelopmentItem } =
    useContext(DataTablesContext);
  const [form] = Form.useForm();

  const onAddItem = () => {
    form.validateFields().then((value) => {
      const item: IDevelopmentItem = {
        id: uuidv4(),
        name: value.name,
        tech: value.tech,
        date: new Date(value.date),
        progress: Math.floor(Math.random() * 101)
      };
      addDevelopmentItem(item);
      form.resetFields();
      setOpenAddDevelopmentItemModal(false);
    });
  };

  return (
    <Modal
      title="Add Development Item"
      open={openAddDevelopmentItemModal}
      onOk={onAddItem}
      onCancel={() => {
        setOpenAddDevelopmentItemModal(false);
      }}
      closable={false}
      okText="Add"
    >
      <div className="mt-6">
        <Form layout="vertical" form={form}>
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input placeholder="Enter item's name" />
          </Form.Item>
          <Form.Item label="Tech" name="tech" rules={[{ required: true }]}>
            <Select
              mode="multiple"
              placeholder="Select item's tech"
              options={[
                { value: techTypeData.ios.key, label: techTypeData.ios.label },
                { value: techTypeData.android.key, label: techTypeData.android.label },
                { value: techTypeData.windows.key, label: techTypeData.windows.label }
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

export default AddDevelopmentItem;
