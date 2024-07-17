/* eslint-disable simple-import-sort/imports */
'use client';

import { Avatar, Breadcrumb, Card, ConfigProvider, Input, Space } from 'antd';
import { usePathname } from 'next/navigation';

import { navItems } from '@/utils/config';
import { BellOutlined, InfoOutlined, ProductOutlined, SearchOutlined } from '@ant-design/icons';

const PageHeader = () => {
  const pathname = usePathname();
  const navData = navItems.find((item) => item.path === pathname);

  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBgContainer: '#f0f9ff',
            lineWidth: 0,
            controlHeight: 38
          }
        }
      }}
    >
      <div className="sticky top-0 z-10 mb-8 flex items-center justify-between rounded-xl p-3 backdrop-blur-md">
        <div>
          <Breadcrumb items={[{ title: 'Page' }, { title: navData?.title }]} />
          <h1 className="mt-1 text-3xl font-bold">{navData?.title}</h1>
        </div>
        <div>
          <Card size="small" className="!rounded-full">
            <Space size="middle">
              <Input
                placeholder="Search..."
                prefix={<SearchOutlined />}
                className="!rounded-full"
              />
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
    </ConfigProvider>
  );
};

export default PageHeader;
