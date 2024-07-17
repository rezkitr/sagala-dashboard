import { Card, Col, Row } from 'antd';

import { CheckTable, DevelopmentTable } from '@/components/data-tables';

const DataTablesPage = () => {
  return (
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
  );
};

export default DataTablesPage;
