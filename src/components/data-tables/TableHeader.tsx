import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';

import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons';

interface IProps {
  title: string;
}

const TableHeader = ({ title }: IProps) => {
  const actionMenuItems: MenuProps['items'] = [
    {
      key: '1',
      label: 'Add Data',
      icon: <PlusOutlined />
    }
  ];

  return (
    <div className="mb-6 flex items-center justify-between">
      <h3 className="text-xl font-semibold">{title}</h3>
      <Dropdown menu={{ items: actionMenuItems }} trigger={['click']} placement="bottomRight">
        <Button icon={<EllipsisOutlined />} />
      </Dropdown>
    </div>
  );
};

export default TableHeader;
