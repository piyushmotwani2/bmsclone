import "./SelectCity.css";
import { Dropdown, Menu, Button, Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";

const SelectCity = (props) => {
  const menu = (
    <Menu>
      <Menu.Item key="1">Clicking me will not close the menu.</Menu.Item>
      <Menu.Item key="2">Clicking me will not close the menu also.</Menu.Item>
      <Menu.Item key="3">Clicking me will close the menu.</Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>
      <Button>
        <Typography.Text>Select City</Typography.Text>
        <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default SelectCity;
