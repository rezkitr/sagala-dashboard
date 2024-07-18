/* eslint-disable simple-import-sort/imports */
'use client';

import { Avatar, Breadcrumb, Button, Card, ConfigProvider, Input, Space } from 'antd';
import debounce from 'lodash/debounce';

import { LayoutContext } from '@/context/LayoutContext';
import {
  BellOutlined,
  InfoOutlined,
  MenuOutlined,
  ProductOutlined,
  SearchOutlined
} from '@ant-design/icons';
import { useCallback, useContext } from 'react';

interface IProps {
  pageTitle: string;
  // eslint-disable-next-line no-unused-vars
  onSearch?: (k: string) => void;
}

const PageHeader = ({ pageTitle, onSearch = () => {} }: IProps) => {
  const { setOpenSideMenu } = useContext(LayoutContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce((keyword) => {
      onSearch(keyword);
    }, 300),
    [onSearch]
  );

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
      <div className="sticky top-0 z-10 mb-8 flex flex-col justify-between gap-y-3 rounded-xl p-3 backdrop-blur-md md:flex-row md:items-center">
        <div>
          <Breadcrumb items={[{ title: 'Page' }, { title: pageTitle }]} />
          <h1 className="mt-1 text-3xl font-bold">{pageTitle}</h1>
        </div>
        <div>
          <Card size="small" className="!rounded-full">
            <Space size="middle">
              <Input
                placeholder="Search..."
                prefix={<SearchOutlined />}
                className="!rounded-full"
                onChange={(e) => handleSearch(e.target.value)}
              />
              <Button
                type="text"
                icon={<MenuOutlined className="text-base" />}
                className="xl:!hidden"
                onClick={() => setOpenSideMenu(true)}
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
