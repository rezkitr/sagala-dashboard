import { Table, type TableProps } from 'antd';

import TableHeader from './TableHeader';

interface DataType {
  name: string;
  progress: number;
  qty: number;
  date: Date;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Progress',
    dataIndex: 'progress',
    key: 'progress'
  },
  {
    title: 'Quantity',
    dataIndex: 'qty',
    key: 'qty'
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date'
  }
];

const CheckTable = () => {
  return (
    <div>
      <TableHeader title="Check Table" />
      <Table columns={columns} dataSource={[]} />
    </div>
  );
};

export default CheckTable;
