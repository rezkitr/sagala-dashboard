/* eslint-disable simple-import-sort/imports */
'use client';

import { Button, Popconfirm, Progress, Space, Table, type TableProps } from 'antd';
import { useContext } from 'react';

import { DataTablesContext } from '@/context/DataTablesContext';
import { IDevelopmentItem } from '@/interfaces';

import { dateFormats, techTypeData } from '@/utils/config';
import { DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import TableHeader from './TableHeader';
import AddDevelopmentItem from './modals/AddDevelopmentItem';

const DevelopmentTable = () => {
  const {
    developmentData,
    filteredDevelopmentData,
    deleteDevelopmentItem,
    setOpenAddDevelopmentItemModal
  } = useContext(DataTablesContext);

  const columns: TableProps<IDevelopmentItem>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Tech',
      dataIndex: 'tech',
      key: 'tech',
      render: (value: string[]) => {
        return (
          <Space className="!text-lg">
            {value.map((key) => techTypeData[key as keyof typeof techTypeData].icon)}
          </Space>
        );
      }
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (value: Date) => moment(value).format(dateFormats.shortDate)
    },
    {
      title: 'Progress',
      dataIndex: 'progress',
      key: 'progress',
      render: (value: number) => <Progress percent={value} />
    },
    {
      title: '',
      key: 'action',
      render: (_, record) => (
        <Popconfirm
          title="Delete Item"
          description="Are you sure to delete this item?"
          onConfirm={() => deleteDevelopmentItem(record.id)}
          okText="Yes"
          cancelText="No"
          placement="left"
        >
          <Button danger type="text" icon={<DeleteOutlined />} />
        </Popconfirm>
      )
    }
  ];

  return (
    <div>
      <TableHeader
        title="Development Table"
        onAddItem={() => setOpenAddDevelopmentItemModal(true)}
      />
      <Table columns={columns} dataSource={filteredDevelopmentData ?? developmentData} />
      <AddDevelopmentItem />
    </div>
  );
};

export default DevelopmentTable;
