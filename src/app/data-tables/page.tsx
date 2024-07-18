/* eslint-disable simple-import-sort/imports */
'use client';

import { Card, Col, Row } from 'antd';
import { useContext } from 'react';

import { PageHeader } from '@/components';
import { CheckTable, DevelopmentTable, FourColumnTable } from '@/components/data-tables';
import { DataTablesContext } from '@/context/DataTablesContext';

const DataTablesPage = () => {
  const { searchData } = useContext(DataTablesContext);
  return (
    <>
      <PageHeader pageTitle="Data Tables" onSearch={searchData} />
      <Row gutter={[16, 20]}>
        <Col xs={24} lg={12}>
          <Card className="!min-h-[720px] !overflow-x-auto">
            <DevelopmentTable />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card className="!min-h-[720px] !overflow-x-auto">
            <CheckTable />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card className="!min-h-[720px] !overflow-x-auto">
            <FourColumnTable />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card className="!min-h-[720px] !overflow-x-auto">
            <CheckTable />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DataTablesPage;
