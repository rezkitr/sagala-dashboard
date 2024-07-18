/* eslint-disable simple-import-sort/imports */
'use client';

import { Button, Popconfirm, Progress, Table, Tag, type TableProps } from 'antd';
import { useContext } from 'react';

import { DataTablesContext } from '@/context/DataTablesContext';
import { IComplexItem } from '@/interfaces';

import { dateFormats, statusTypeData } from '@/utils/config';
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  WarningOutlined
} from '@ant-design/icons';
import moment from 'moment';
import TableHeader from './TableHeader';
import AddComplexItem from './modals/AddComplexItem';

const ComplexTable = () => {
  const { complexData, filteredComplexData, deleteComplexItem, setOpenAddComplexItemModal } =
    useContext(DataTablesContext);

  const columns: TableProps<IComplexItem>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (value: Date) => moment(value).format(dateFormats.shortDate)
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (value: string) => {
        const icons = {
          success: <CheckCircleOutlined />,
          error: <CloseCircleOutlined />,
          warning: <WarningOutlined />
        };
        return (
          <Tag
            icon={icons[value as keyof typeof icons]}
            color={statusTypeData[value as keyof typeof statusTypeData].key}
          >
            {statusTypeData[value as keyof typeof statusTypeData].label}
          </Tag>
        );
      }
    },
    {
      title: 'Progress',
      dataIndex: 'progress',
      key: 'progress',
      render: (value: number) => <Progress percent={value} showInfo={false} />
    },
    {
      title: '',
      key: 'action',
      render: (_, record) => (
        <Popconfirm
          title="Delete Item"
          description="Are you sure to delete this item?"
          onConfirm={() => deleteComplexItem(record.id)}
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
      <TableHeader title="Complex Table" onAddItem={() => setOpenAddComplexItemModal(true)} />
      <Table columns={columns} dataSource={filteredComplexData ?? complexData} />
      <AddComplexItem />
    </div>
  );
};

export default ComplexTable;
