import { Button, Drawer, Menu, Modal } from "antd";

interface ProfileProps {
  isModalVisible: boolean;
  closeModal: () => void;
  handleLogout: () => void;
}

const Profile = ({
  isModalVisible,
  closeModal,
  handleLogout,
}: ProfileProps) => {
  return (
    <Drawer
      title="Profile"
      open={isModalVisible}
      onClose={closeModal}
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
