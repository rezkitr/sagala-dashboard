/* eslint-disable simple-import-sort/imports */
'use client';

import { Button, Popconfirm, Progress, Table, type TableProps } from 'antd';
import moment from 'moment';
import { useContext } from 'react';

import { DataTablesContext } from '@/context/DataTablesContext';
import { ICheckItem } from '@/interfaces';
import { dateFormats } from '@/utils/config';
import { DeleteOutlined } from '@ant-design/icons';

import TableHeader from './TableHeader';
import AddCheckItem from './modals/AddCheckItem';

const CheckTable = () => {
  const { checkData, filteredCheckData, deleteCheckItem, setOpenAddCheckItemModal } =
    useContext(DataTablesContext);

  const columns: TableProps<ICheckItem>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Progress',
      dataIndex: 'progress',
      key: 'progress',
      render: (value: number) => <Progress percent={value} />
    },
    {
      title: 'Quantity',
      dataIndex: 'qty',
      key: 'qty'
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (value: Date) => moment(value).format(dateFormats.shortDate)
    },
    {
      title: '',
      key: 'action',
      render: (_, record) => (
        <Popconfirm
          title="Delete Item"
          description="Are you sure to delete this item?"
          onConfirm={() => deleteCheckItem(record.id)}
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
      <TableHeader title="Check Table" onAddItem={() => setOpenAddCheckItemModal(true)} />
      <Table columns={columns} dataSource={filteredCheckData ?? checkData} />
      <AddCheckItem />
    </div>
  );
};

export default CheckTable;
