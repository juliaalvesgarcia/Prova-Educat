import React from "react";
import styled from "styled-components";
import Aside from "./Layout/Aside";
import Content from "./Layout/Content";
import MainHeader from "./Layout/MainHeader";
import logo from "../src/assets/logo.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { navData } from '../src/Layout/navData';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Dados from "./student.json";

type LayoutProps = {
    className?: string;
    children?: any;
}

const Layout = ({ className, children }: LayoutProps) => {
    return (
        <div className={className}>
            <MainHeader>
                <div className="icons_header">
                    <div className="logo">       
                        <img src={logo} />
                    </div>
                    <div className="profile">
                        <h5>JULIA AVES GARCIA</h5>
                        <a href="/">
                        <div className="icon-user">
                            <AccountCircleIcon />
                        </div>
                        </a>
                        <a href="/">
                        <div className="icon">
                            <SettingsIcon />
                        </div>
                        </a>
                        <a href="/">
                            <div className="icon">
                                <LogoutIcon />
                            </div>
                        </a>
                    </div>
                </div>
            </MainHeader>
            <Aside>
                <div className="menu">
                    <div>
                        {navData.map(item =>{
                            return <div key={item.id} className="sideitem">
                                        {item.icon}
                                        <span className="linkText">{item.text}</span>
                                        {item.icon1}
                                </div>
                            })}
                    </div>
                    <div className="menuBtn">
                            <div>
                                <KeyboardDoubleArrowLeftIcon />
                            </div>
                            <div>
                                <span>Ocultar menu</span>
                            </div>
                </div>
                </div>
            </Aside>
            <Content>{children}</Content>
        </div>
    );
};

export default styled(Layout)`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: 240px auto;
    grid-template-rows: 90px auto;
    grid-template-areas: 
        "MH MH"
        "AS CT";
        
    .icons_header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .profile {
    display: flex;
    align-items: center;
    margin: 15px;
  }

  a{
    text-decoration: none;
    text-decoration-color: none;
  }

  h5 {
    font-family: "Open Sans", sans-serif;
    font-weight: 700;

    margin-right: 20px;

    color: white;
  }

  .icon {
    background-color: #466082;
    border-radius: 50px;
    width: 50px;
    height: 50px;

    color: white;

    margin-right: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon-user {
    background-color: #C4C4C4;
    border-radius: 50px;
    width: 50px;
    height: 50px;

    color: white;

    margin-right: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
    .logo{
        margin-top: 10px;
        margin-left: 10px;
    }
    .sidenav {
    width: 250px;
    transition: width 0.3s ease-in-out;
    height: 100vh;
    background-color: rgb(10,25,41);
    padding-top: 28px;
    }
 
    .sidenavClosed {
        composes: sidenav;
        transition: width 0.3s ease-in-out;
        width: 60px
    }
    
    .sideitem {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        cursor: pointer;
        color: #B2BAC2;
        text-decoration: none;
        justify-content: space-between;
    }
    .linkText {
        padding-left: 16px;
        text-align: center;
    }
    
    .linkTextClosed {
        composes: linkText;
        visibility: hidden;
    }
    
    .sideitem:hover {
        background-color: #244f7d1c;
    }
    
    .menuBtn {
        color: #B2BAC2;
        background-color: transparent;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        flex-direction: row;
        padding-left: 20px;
        border: 2px solid #244f7d1c;
        text-align: center;
        justify-content: center;
        background: #FFFFFF;
        box-shadow: 0px -3px 11px rgba(137, 137, 137, 0.25);
        margin-top: 50px;

    }
    .menu{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .icon-menu{
        border: 1px solid #F5F5F5;
        box-shadow: 2.77368px 2.77368px 5.54735px rgba(141, 141, 141, 0.25);
        border-radius: 100px;
        color: #4C7CAB;
    }
`;