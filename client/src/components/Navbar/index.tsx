
import { Menu } from "antd";
import {  AccountBookOutlined, AppstoreOutlined, ContactsOutlined, HomeOutlined   } from '@ant-design/icons';

import LoginSignup from "../LoginSignup";
import '../../App.css'




const { SubMenu } = Menu;

const Navbar = () => {
  return (

    <div style={{ borderBottom: '1px solid #f0f0f0', padding: '0 20px', backgroundColor: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        {/* Logo */}
        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
          MyApp
        </div>

        {/* Navigation Menu */}
        <Menu mode="horizontal" style={{ flex: 1, marginLeft: '20px' }}>
          <Menu.Item key="home" icon={<HomeOutlined/>}>
            Home
          </Menu.Item>
          
          <SubMenu key="services" title="Services" icon={<AppstoreOutlined />}>
            <Menu.Item key="services:1">Consultation</Menu.Item>
            <Menu.Item key="services:2">Pharmacy</Menu.Item>
            <Menu.Item key="services:3">Lab Tests</Menu.Item>
          </SubMenu>
          
          <SubMenu key="about" title="About Us" icon={<AccountBookOutlined/>}>
            <Menu.Item key="about:1">Our Team</Menu.Item>
            <Menu.Item key="about:2">Careers</Menu.Item>
          </SubMenu>

          <Menu.Item key="contact" icon={<ContactsOutlined />}>
            Contact
          </Menu.Item>
        </Menu>

        {/* Buttons */}
        <div>
          <LoginSignup/>
        </div>
      </div>
    </div>



  )
}

export default Navbar