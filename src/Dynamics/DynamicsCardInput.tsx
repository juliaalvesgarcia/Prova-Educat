import React, { useState } from "react";
import styled from "styled-components";
import DateRangeIcon from '@mui/icons-material/DateRange';
import ArticleIcon from '@mui/icons-material/Article';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CreateIcon from '@mui/icons-material/Create';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

type DynamicsCardStudentProps = {
    className?: string;
    name?: string;
    email?: string;
    number?: string;
    vigencia?: string;
    formacao?: string;
}

const DynamicsCardsStudent = ({className, name, email, number,vigencia,formacao}: DynamicsCardStudentProps) =>{
    const [userFormacao, setUserFormacao] = useState("");
    return(
        <div className={className}>
            <div className="account">
                <div style={{color: "#C4C4C4"}}>
                    <AccountCircleIcon sx={{ fontSize:110}}/>
                </div>
                <div>
                    <button className={formacao}>{formacao}</button>
                </div>
            </div>
            <div className="perfil">
                <div>
                    <div className="info_name">
                        <div><label className="name">{name}</label></div>
                        <div className="btn">
                            <div className="icons">
                                <DateRangeIcon sx={{ color: "#5F5F5F"}}/>
                            </div>
                            <div className="icons">
                                <ArticleIcon sx={{ color: "#5F5F5F"}}/>
                            </div>
                            <div className="icons">
                                <AttachMoneyIcon sx={{ color: "#5F5F5F"}}/>
                            </div>
                            <div className="icons">
                                <CreateIcon sx={{ color: "#5F5F5F"}}/>
                            </div>
                        </div>
                    </div>
                    <div className="information">
                        <div className="option">
                            <EmailIcon sx={{color: "#5F5F5F"}} />
                            <label className="information_student">{email}</label>
                        </div>
                        <div className="option">
                            <PhoneIphoneIcon sx={{color: "#5F5F5F"}} />
                            <label className="information_student">{number}</label>
                        </div>
                        <div className="option">
                            <label className="vigencia">Vigência do último contrato:</label>
                            <label className="information_student">{vigencia}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default styled(DynamicsCardsStudent)`
    width: 100%;
    height: 100%;
    border: 2px solid #F5F5F5;
    display: flex;


    .info_name{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-right: 10px;
    }
    .account{
        width: 25%;
    }
    .information{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .name{
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        text-transform: uppercase;
        color: #313131;
    }
    .information_student{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        align-items: center;
        color: #313131;
        margin-left: 5px;
    }
    .icons{
        border: 1px solid #F5F5F5;
        box-shadow: 2.46549px 2.46549px 4.93098px rgba(141, 141, 141, 0.25);
        border-radius: 100px;
        margin: 5px;
    }
    .perfil{
        margin-top: 20px;
        margin-bottom: 20px;
        width: 85%;
    }
    .option{
        display: flex;
        align-items: center;
        margin-bottom: 10px ;
    }
    .vigencia{
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 19px;
        color: #313131;
        font-weight: bold;
    }
    .Doutor{
        background: #5CADAD;
        border-radius: 13.1463px;
        color: white;
        height: 27.89px;
        border-style: none;
        width: 160.94px;
        height: 27.89px;
    }
    .Mestre{
        background: #427777;
        border-radius: 13.1463px;
        color: white;
        height: 27.89px;
        border-style: none;
        width: 160.94px;
        height: 27.89px;
    }
`;