/* eslint-disable simple-import-sort/imports */
'use client';

import { Card, Col, Row } from 'antd';
import { useContext } from 'react';

import { PageHeader } from '@/components';
import { CheckTable, DevelopmentTable } from '@/components/data-tables';
import { DataTablesContext } from '@/context/DataTablesContext';

const DataTablesPage = () => {
  const { searchData } = useContext(DataTablesContext);
  return (
    <>
      <PageHeader pageTitle="Data Tables" onSearch={searchData} />
      <Row gutter={[16, 20]}>
        <Col span={12}>
          <Card className="!min-h-[720px]">
            <DevelopmentTable />
          </Card>
        </Col>
        <Col span={12}>
          <Card className="!min-h-[720px]">
            <CheckTable />
          </Card>
        </Col>
        <Col span={12}>
          <Card className="!min-h-[720px]">
            <DevelopmentTable />
          </Card>
        </Col>
        <Col span={12}>
          <Card className="!min-h-[720px]">
            <CheckTable />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DataTablesPage;
