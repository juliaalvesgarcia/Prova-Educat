import React, { useState } from "react";
import styled from "styled-components";
import DynamicsCardInput from "../Dynamics/DynamicsCardInput";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import DynamicsTitle from "../Dynamics/DynamicsTitle";
import DynamicsSearch from "../Dynamics/DynamicsSearch";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DynamicsInput from "../Dynamics/DynamicsInput";
import Dados from "../student.json";
import DynamicsFilter from "../Dynamics/DynamicsFilter";

type NewStudentPageProps = {
    className?: string;
    isDisbled?: boolean;
}

const jsonAlunos = {
    alunos: [
        {
            name: "Julia Alves Garcia",
            email:"julalvesgarcia@gmail.com",
            number:"31920027685",
            vigencia:"13/03/2021 à 13/03/2023"
        },
        {
            name: "Isabela Alves",
            email:"julalvesgarcia@gmail.com",
            number:"31920027685",
            vigencia:"13/03/2021 à 13/03/2023"
        },
        {
            name: "Filipe",
            email:"julalvesgarcia@gmail.com",
            number:"31920027685",
            vigencia:"13/03/2021 à 13/03/2023",
            formacao:"Mestre"
        },
    ],
};

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const NewStudentPage = ({className}: NewStudentPageProps) => {
    const [searchName, setSearchName] = useState("");
    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [celular, setCelular] = useState("");
    const [vigencia, setVigencia] = useState("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const vigenciaArray : any = [];
    const nameArray : any = [];
    const emailArray : any = [];
    const celularArray : any = [];
    const adricionarArray = () => {
        vigenciaArray.push(vigencia);
        nameArray.push(name);
        emailArray.push(email);
        celularArray.push(celular);
        console.log(vigenciaArray);
    };
    return(
        <div className={className}>
            <DynamicsTitle title="Gestão de Docente"/>
            <div className="docente">
                <button className="newDocente" onClick={handleOpen}>Novo Docente</button>
            </div>
            <div className="top">
                <div className="filter">
                    <input
                    placeholder="Buscar"
                    className="inputBusca"
                    onChange={(event) => {
                        setSearchName(event.target.value);}}>
                    </input>
                </div>
                <div>
                    <button className="btn1">
                        <div><ManageSearchIcon /></div>
                        <div><label>Filtros</label></div>
                    </button>
                </div>                
            </div>
            <DynamicsFilter />
            <div className="students">
                {Dados.filter((aluno: any) => {
                    if (searchName === ""){
                        return aluno;
                    } else if (aluno.name.toLowerCase().includes(searchName.toLowerCase())){
                        return aluno;
                    }
                }).map((aluno:any) => {
                    return(
                        <div className="dinamico">
                            <DynamicsCardInput 
                            name={aluno.name}
                            email={aluno.email}
                            number={aluno.number}
                            vigencia={aluno.vigencia}
                            formacao={aluno.formacao}
                            />
                        </div>
                    );
                })}
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Cadastro de Docentes
                </Typography>
                <div style={{display:"flex"}}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Nome do estudante: 
                    </Typography>
                    <DynamicsInput 
                        className="input"
                        type="text"
                        value={name}
                        onChange={(e: { target: { value: React.SetStateAction<any>}}) => setName(e.target.value)}
                        />
                </div>
                <div style={{display:"flex"}}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Email: 
                    </Typography>
                    <DynamicsInput 
                    className="input"
                    type="text"
                    value={email}
                    onChange={(e: { target: { value: React.SetStateAction<any>}}) => setEmail(e.target.value)}
                    />
                </div>
                <div style={{display:"flex"}}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Celular:
                    </Typography>
                    <DynamicsInput 
                    className="input"
                    type="text"
                    value={celular}
                    onChange={(e: { target: { value: React.SetStateAction<any>}}) => setCelular(e.target.value)}
                    />
                </div>
                <div style={{display:"flex"}}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Vigência do último contrato:
                    </Typography>
                    <DynamicsInput 
                    className="input"
                    type="text"
                    value={vigencia}
                    onChange={(e: { target: { value: React.SetStateAction<any>}}) => setVigencia(e.target.value)}
                    />
                </div>
                <Button onClick={adricionarArray}>Cadastrar</Button>
                </Box>
            </Modal>
        </div>
    )
}

export default styled(NewStudentPage)`
    height: 100%;
    width: 80%;
    border: 10px solid #E5E5E5;
    padding: 20px;

    .dinamico{
        
    }
    .btn{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .filter{
        margin-top: 30px;
     }
    .top{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;

    }
    .inputBusca{
        border-top: 0px;
        border-left: 0px;
        border-right: 0px;
        border-bottom: 0.976562px solid #7D7D7D;    
        line-height: 24px;
    }
    .btn_filter{
        font-style: normal;
        font-weight: 600;
        font-size: 16.3784px;
        line-height: 22px;
        display: flex;
        align-items: center;
        background-color: white;
        color: #5F5F5F;
        border-radius: 100px;
        padding: 6px, 10px, 6px, 10px;
        box-shadow: 0px 4px 4px rgba(107, 107, 107, 0.25);
        border-color: white;
        border-style: solid;
        margin-top: 10px;
    }
    .newDocente{
        background: #4C7CAB;
        box-shadow: 0px 4px 4px rgba(107, 107, 107, 0.25);
        border-radius: 100px;
        color:white;
        border-style: none;
        font-size: 16px;
        line-height: 27px;
        width: 189px;
        height: 51px;
    
    }
    .docente{
        display: flex;
        justify-content: flex-start;
    }
    .btn1{
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(107, 107, 107, 0.25);
        border-radius: 100px;
        border-style: none;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;