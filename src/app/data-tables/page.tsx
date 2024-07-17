import { Card, Col, Row } from 'antd';

import { CheckTable, DevelopmentTable } from '@/components/data-tables';
import DataTablesProvider from '@/context/DataTablesContext';

const DataTablesPage = () => {
  return (
    <DataTablesProvider>
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
    </DataTablesProvider>
  );
};

export default DataTablesPage;
