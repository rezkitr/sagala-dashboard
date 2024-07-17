import { Table, type TableProps } from 'antd';

import TableHeader from './TableHeader';

interface DataType {
  name: string;
  tech: string[];
  date: Date;
  progress: number;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Tech',
    dataIndex: 'tech',
    key: 'tech'
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date'
  },
  {
    title: 'Progress',
    dataIndex: 'progress',
    key: 'progress'
  }
];

const DevelopmentTable = () => {
  return (
    <div>
      <TableHeader title="Development Table" />
      <Table columns={columns} dataSource={[]} />
    </div>
  );
};

export default DevelopmentTable;
