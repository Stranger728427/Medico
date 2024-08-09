import { UserOutlined } from "@ant-design/icons"
import { Avatar } from "antd"

const Login = () => {
  return (
    
      <div className="login" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
       <Avatar icon={<UserOutlined />} style={{ marginRight: '10px' }} />
       <span>Username</span>
      </div> 
    
  )
}

export default Login