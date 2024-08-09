
import { Layout, Menu, Row, Col } from 'antd';

import SearchBox from './SearchBox';
import Login from './Login';


const { Header } = Layout;

const HeaderComponent = () => {
  const items = ['Home', 'Medicine', 'Blood'];

  return (
    <Header style={{ background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', zIndex: 1000 }}>
      <Row justify="space-evenly" align="middle">
        <Col xs={40} sm={8}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginRight: '20px' }}>Logo</div>
            <SearchBox/>
          </div>
        </Col>
        <Col xs={0} sm={12}>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['Home']} style={{ lineHeight: '64px' }}>
            {items.map(item => (
              <Menu.Item key={item}>{item}</Menu.Item>
            ))}
          </Menu>
        </Col>
        <Col xs={24} sm={4}>
         
             <Login/>
          
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderComponent;
