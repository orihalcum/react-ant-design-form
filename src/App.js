import React from 'react';
import FormLogin from './components/FormLogin';
import { Row, Col } from 'antd';

function App() {
  return (
    <div className="App">
      <div style={{ padding: 60 }}>
        <Row gutter={[60, 60]}>
          <Col span={12}>
            <FormLogin />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
