'use client';

import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';

import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons';

interface IProps {
  title: string;
  onAddItem: () => void;
}

const TableHeader = ({ title, onAddItem }: IProps) => {
  const actionMenuItems: MenuProps['items'] = [
    {
      key: 'add',
      label: 'Add Data',
      icon: <PlusOutlined />
    }
  ];

  const onClick: MenuProps['onClick'] = () => {
    onAddItem();
  };

  return (
    <div className="mb-6 flex items-center justify-between">
      <h3 className="text-xl font-semibold">{title}</h3>
      <Dropdown
        menu={{ items: actionMenuItems, onClick }}
        trigger={['click']}
        placement="bottomRight"
      >
        <Button icon={<EllipsisOutlined />} />
      </Dropdown>
    </div>
  );
};

export default TableHeader;
