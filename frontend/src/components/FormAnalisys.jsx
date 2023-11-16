import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { analisysRoute, tipoanalisysRoute } from "../utils/APIroute";
import Sidebar from "./Sidebar";

const FormContainer = styled.div`
  margin-left: 250px; /* Ancho del Sidebar */
  display: flex;
  padding: 20px;
  background-color: #25136a;

`;

const RadioButtonsContainer = styled.div`
max-height: 200px; /* Altura máxima antes de aparecer la barra de desplazamiento */
overflow-y: scroll; /* Habilitar el desplazamiento vertical */
border: 1px solid #ccc;
border-radius: 5px;
padding: 10px;
background-color:white;
`;

const Form = styled.form`
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  select {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const RadioLabel = styled.label`
  margin-right: 10px;
  input {
    margin-right: 5px;
  }
`;

function FormAnalisys() {
  const [name, setName] = useState("");
  const [tipo, setTipo] = useState("");
  const [date, setDate] = useState("");
  const [data, setData] = useState([]);
  const [descripcion, setDescripcion] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  

  const toastOptions = {
    position: "top-right",
    hideProgressBar: true,
    pauseOnHover: true,
    draggable: true,
    autoClose: 3000,
    theme: "dark",
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!params.id) {
      const { data } = await axios.post(analisysRoute, {
        name,
        tipo,
        date,
        descripcion,
      });
      if (data.status == false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status == true) {
        toast.success("Se creo la sollicitud", toastOptions);
      }
    } else {
      await axios.put(analisysRoute + "/" + params.id, {
        name,
        tipo,
        date,
        descripcion,
      });
    }
    e.target.reset();
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      fectTask();
    }
    async function fectTask() {
      const res = await axios.get(analisysRoute + "/" + params.id);
      setName(res.data.paciente);
      setDescripcion(res.data.observaciones);
      setDate(res.data.fecha);
      setTipo(res.data.muestra);
    }
    async function getAnalisys() {
      const res = await axios.get(tipoanalisysRoute);
      setData(res.data);
    }
    getAnalisys();
  }, []);
  return (
    <FormContainer>
      <Sidebar />
      <Form onSubmit={handlesubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
        <select name="" id="" onChange={(e) => setTipo(e.target.value)} value={tipo}>
          <option value="Laboratorio">Laboratorio</option>
          <option value="Clinica">Envío de muestra</option>
        </select>
        <input type="date" name="" id="" value={date} onChange={(e) => setDate(e.target.value)} />
        <textarea name="" id="" value={descripcion} cols="100" rows="1" onChange={(e) => setDescripcion(e.target.value)} />
        <RadioButtonsContainer>
          {data.map((item, index) => (
            <RadioLabel key={index}>
              <input type="radio" value={item.name} id="" />
              {item.name}
            </RadioLabel>
          ))}
        </RadioButtonsContainer>
        <button>{params.id ? "Update" : "Save"}</button>
      </Form>
      <ToastContainer />
    </FormContainer>
  );
}

export default FormAnalisys;
