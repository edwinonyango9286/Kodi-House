import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Layout, Menu,Button, theme } from "antd";
import { useNavigate } from "react-router-dom";
import IconWhite from '../Assets/logos and Icons-20230907T172301Z-001/logos and Icons/icon white.png'
import UserImage from '../Assets/Avatars portrait-20230907T172029Z-001/Avatars portrait/JPEG/Abby Smith.jpg'
import {AiOutlineMenu} from 'react-icons/ai'
import {PiLightningBold} from 'react-icons/pi'
import {AiOutlineHome} from 'react-icons/ai'
import { FiMail,FiUsers } from "react-icons/fi";
import {BiUserCircle} from "react-icons/bi"
import {HiOutlineBuildingOffice2} from "react-icons/hi2"
import {BsBriefcase} from "react-icons/bs"
import {FiServer} from "react-icons/fi"
import {
  HiOutlineInboxIn,
  HiOutlineSpeakerphone,
  HiOutlineChartBar,
  HiOutlineLink,
  HiOutlineSupport,
  HiAdjustments,
} from "react-icons/hi";
import {HiOutlineDocumentChartBar} from "react-icons/hi2"
import {BsBellFill}  from "react-icons/bs"


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
        <div className=" flex items-center justify-center bg-blue-600 h-16 gap-x-2.5">
          <img className="w-9 h-9" src={IconWhite} alt="logo" />
          <h2 className="text-white text-base font-bold">KODI HOUSE</h2>
        </div>
        <Menu
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
              key: "USER",
              icon: <PiLightningBold className="fs-4" />,
              label: "Welcome James",
              //icon: <IoLogOutOutline className="fs-4" />,
            },
            {
              key: "",
              icon: <AiOutlineHome className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "Applications",
              icon: <FiMail className="fs-4" />,
              label: "Applications",
            },

            {
              key: "Tenants",
              icon: <FiUsers className="fs-4" />,
              label: "Tenants",
            },

            {
              key: "Users",
              icon: <BiUserCircle className="fs-4" />,
              label: "Users",
            },

            {
              key: "Properties",
              icon: <HiOutlineBuildingOffice2 className="fs-4" />,
              label: "Properties",
            },

            {
              key: "Finances",
              icon: <BsBriefcase className="fs-4" />,
              label: "Finances",
              children: [
                {
                  key: "Invoices",
                  label: "Invoices",
                },
                {
                  key: "Leases",
                  label: "Leases",
                },
                {
                  key: "Expenses",
                  label: "Expenses",
                },
                {
                  key: "Receipts",
                  label: "Receipts",
                },
              ],
            },
            {
              key: "Task",
              icon: <FiServer className="fs-4" />,
              label: "Task",
            },
            {
              key: "Messages",
              icon: <HiOutlineInboxIn className="fs-4" />,
              label: "Messages",
            },

            {
              key: "Noticeboard",
              icon: <HiOutlineSpeakerphone className="fs-4" />,
              label: "Noticebaord",
            },

            {
              key: "Documents",
              icon: <HiOutlineDocumentChartBar className="fs-4" />,
              label: "Documents",
            },

            {
              key: "Reports",
              icon: <HiOutlineChartBar className="fs-4" />,
              label: "Reports",
              children: [
                {
                  key: "Payment Reports",
                  label: "Expenses",
                },
                {
                  key: "Expenses vs Income",
                  label: "Expenses vs Income",
                },
              ],
            },
            {
              key: "Referrals",
              icon: <HiOutlineLink className="fs-4" />,
              label: "Referrals",
            },
            {
              key: "Support Tickets",
              icon: <HiOutlineSupport className="fs-4" />,
              label: "Support Tickets",
            },
            {
              key: "Setups",
              icon: <HiAdjustments className="fs-4" />,
              label: "Setups",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="flex justify-between ps-1 pe-5"
          style={{ padding: 0, background: colorBgContainer }}
        >
          <Button
            type="text"
            icon={collapsed ? <AiOutlineMenu /> : <AiOutlineMenu />}
            onClick={() => setCollapsed(!collapsed)}
            className="trigger"
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div className="flex gap-4 items-center">
            <div className="position-relative">
              <FiMail className="fs-4" />
            </div>
            <div className="position-relative">
              <BsBellFill className="fs-4" />
            </div>

            <div className="flex justify-between gap-4 items-center">
              <img width={32} height={32} src={UserImage} alt="userimage"/>
            </div>
            <div
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              className="flex flex-col justify-between"
            >
              <h5 className="mb-0">Omollo</h5>
              <p className="mb-0">omollo@dev.com</p>
            </div>
            <div
              className="dropdown-menu"
              aria-labelledby="dropdownMenuLink"
              style={{ height: "auto", lineHeight: "20px" }}
            >
              <li>
                <Link to="" className="dropdown-item py-1 mb-1">
                  View Profile
                </Link>
              </li>

              <li>
                <Link to="/" className="dropdown-item py-1 mb-1">
                  Signout
                </Link>
              </li>
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
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
