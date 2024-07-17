import { Avatar, Card, Input, Space } from 'antd';

import { BellOutlined, InfoOutlined, ProductOutlined, SearchOutlined } from '@ant-design/icons';

const PageHeader = () => {
  return (
    <div className="sticky top-0 mb-8 flex items-center justify-between rounded-xl p-3 backdrop-blur-md">
      <h1 className="text-3xl font-bold">Data Tables</h1>
      <div>
        <Card size="small" className="!rounded-full">
          <Space size="middle">
            <Input placeholder="Search..." prefix={<SearchOutlined />} className="!rounded-full" />
            <BellOutlined className="text-base" />
            <InfoOutlined className="text-base" />
            <ProductOutlined className="text-base" />
            <Avatar size={38} className="!bg-violet-900">
              RT
            </Avatar>
          </Space>
        </Card>
      </div>
    </div>
  );
};

export default PageHeader;
