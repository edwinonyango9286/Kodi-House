import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { RiCouponLine } from "react-icons/ri";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import { IoIosNotifications } from "react-icons/io";
import { FaClipboardList,} from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();


  return (
    <Layout /* onContextMenu={(e) => e.preventDefault()} */>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="">DC</span>
            <span className="">Dev Corner</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          //defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key == "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "james",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Welcome James",
            },
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "Applications",
              icon: <AiOutlineUser className="fs-4" />,
              label: "Applications",
            },

            {
              key: "Tenants",
              icon: <AiOutlineUser className="fs-4" />,
              label: "Tenants",
            },

            {
              key: "Users",
              icon: <AiOutlineUser className="fs-4" />,
              label: "Users",
            },

            {
              key: "Properties",
              icon: <AiOutlineUser className="fs-4" />,
              label: "Properties",
            },

            {
              key: "Finances",
              icon: <AiOutlineShoppingCart className="fs-4" />,
              label: "Finances",
              children: [
                {
                  key: "Invoices",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Invoices",
                },
                {
                  key: "Leases",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Leases",
                },
                {
                  key: "Expenses",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Expenses",
                },
                {
                  key: "Receipts",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Receipts",
                },
              ],
            },
            {
              key: "Task",
              icon: <FaClipboardList className="fs-4" />,
              label: "Task",
            },

            {
              key: "Noticeboard",
              icon: <FaClipboardList className="fs-4" />,
              label: "Noticebaord",
            },

            {
              key: "Documents",
              icon: <FaClipboardList className="fs-4" />,
              label: "Documents",
            },

            {
              key: "Reports",
              icon: <RiCouponLine className="fs-4" />,
              label: "Reports",
              children: [
                {
                  key: "Payment Reports",
                  icon: <ImBlog className="fs-4" />,
                  label: "Expenses",
                },
                {
                  key: "Expenses vs Income",
                  icon: <RiCouponLine className="fs-4" />,
                  label: "Expenses vs Income",
                },
              ],
            },
            {
              key: "Referrals",
              icon: <FaClipboardList className="fs-4" />,
              label: "Referrals",
            },
            {
              key: "Support Tickets",
              icon: <FaClipboardList className="fs-4" />,
              label: "Support Tickets",
            },
            {
              key: "Setups",
              icon: <FaClipboardList className="fs-4" />,
              label: "Setups",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative">
              <IoIosNotifications className="fs-4" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>

            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <img
                  width={32}
                  height={32}
                  src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
                  alt=""
                />
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="mb-0">Navdeep</h5>
                <p className="mb-0">navdeepdahiya753@gmail.com</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    Signout
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <ToastContainer
            position="top-right"
            autoClose={250}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
