import { Button, Menu, Drawer} from "antd";
import {  BuildOutlined, MenuOutlined, MessageOutlined,  } from "@ant-design/icons";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import useOnScreen from "../../utils";
const MainMenu = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState("home");
  const menuBtnRef = useRef(null);

  const onClick = (e) => {
    setCurrent(e.key);
    setVisible(false);
    // navigator(`/${e.key}`);
  };

  const menuMobile = [
    {
      label: <NavLink   to="/">الجسور</NavLink>,
      key: "bridges",
      icon: <BuildOutlined />,
      
      children: [
        {
          label: (
            <NavLink to="/thesis"> المذكرات</NavLink>
          ),
          key: "thesis",
        },
        {
          label: (
            <NavLink to="/lectures">محاضرات ودروس</NavLink>
          ),
          key: "lectures",
        },
        {
          label: (
            <NavLink to="/books"> كتب</NavLink>
          ),
          key: "books",
        },
        {
          label: (
            <NavLink to="/events">ملتقيات</NavLink>
          ),
          key: "events",
        },
        {
          label: (
            <NavLink to="/templates">نماذج</NavLink>
          ),
          key: "templates",
        },
      ]
    },
    {
      label: <NavLink to="/contact">تواصل معنا</NavLink>,
      key: "contact",
      icon: <MessageOutlined />,
    },
  ];

  const menuLgScreen = [
   
    ...menuMobile,
  ];

  const MenuShowing = ({ mode = "horizontal", visible = true, menuItems }) => {
    return visible ? (
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        defaultOpenKeys={[]}
        mode={mode}
        items={menuItems}
        theme="light"
        className="mainMenu"
        multiple={false}
      />
    ) : (
      <></>
    );
  };

  const menuBtnVisible = useOnScreen(menuBtnRef);

  return (
    <>
      <MenuShowing visible={!menuBtnVisible} menuItems={menuLgScreen} />
      <Button
        className="menuBtn"
        type="dashed"
        icon={<MenuOutlined />}
        onClick={() => setVisible(true)}
        ref={menuBtnRef}
      />
      <Drawer
        title="Gear Genisis"
        placement="left"
        onClose={() => setVisible(false)}
        open={visible}
      >
        <MenuShowing mode="inline" menuItems={menuMobile}  />
      </Drawer>
    </>
  );
};

export default MainMenu;
