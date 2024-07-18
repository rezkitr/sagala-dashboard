/* eslint-disable simple-import-sort/imports */
'use client';

import { Button, Popconfirm, Table, type TableProps } from 'antd';
import moment from 'moment';
import { useContext } from 'react';

import { DataTablesContext } from '@/context/DataTablesContext';
import { IFourColumnItem } from '@/interfaces';
import { dateFormats } from '@/utils/config';
import { DeleteOutlined } from '@ant-design/icons';

import TableHeader from './TableHeader';
import AddFourColumnItem from './modals/AddFourColumnItem';

const FourColumnTable = () => {
  const {
    fourColumnData,
    filteredFourColumnData,
    deleteFourColumnItem,
    setOpenAddFourColumnItemModal
  } = useContext(DataTablesContext);

  const columns: TableProps<IFourColumnItem>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Progress',
      dataIndex: 'progress',
      key: 'progress',
      render: (value: number) => `${value}%`
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
          onConfirm={() => deleteFourColumnItem(record.id)}
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
      <TableHeader title="4-Column Table" onAddItem={() => setOpenAddFourColumnItemModal(true)} />
      <Table columns={columns} dataSource={filteredFourColumnData ?? fourColumnData} />
      <AddFourColumnItem />
    </div>
  );
};

export default FourColumnTable;
