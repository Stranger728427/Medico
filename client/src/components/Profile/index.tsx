import { Button, Drawer, Menu } from "antd";

interface ProfileProps {
  isDrawerVisible: boolean;
  onCloseDrawer: () => void;
  handleLogout: () => void;
}

const Profile = ({
  isDrawerVisible,
  onCloseDrawer,
  handleLogout,
}: ProfileProps) => {
  return (
    <Drawer
      title="Profile"
      open={isDrawerVisible}
      onClose={onCloseDrawer}
      footer={null}
      style={{
        top: "50%",
        left: "50%",
      }}
    >
      <Menu>
        <Menu.Item key="profile">Profile</Menu.Item>
        <Menu.Item key="setting">Settings</Menu.Item>
        <Menu.Item key="logout">
          <Button type="primary" onClick={handleLogout}>
            Logout
          </Button>
        </Menu.Item>
      </Menu>
    </Drawer>
  );
};

export default Profile;
