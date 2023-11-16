import axios from "axios";
import React, { useState,useEffect } from "react";
import { medicoRoute } from "../utils/APIroute";
import Sidebar from "./Sidebar"
import styled from "styled-components";

const FormContainer = styled.div`
  margin-left: 250px; /* Ancho del Sidebar */
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormTitle = styled.h1`
  margin-bottom: 20px;
  color: #333; /* Cambia el color del título según tu preferencia */
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const SelectLabel = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff; /* Cambia el color del botón según tu preferencia */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const FormAsignar = ({ solicitud }) => {
  const [medicos, setMedicos] = useState([]);
  const [medicoSeleccionado, setMedicoSeleccionado] = useState("");

  useEffect(() => {
    const fetchMedicos = async () => {
      const response = await axios.get(medicoRoute)
      const medicos = response.data
      setMedicos(medicos);
      console.log(medicos)
    };

    fetchMedicos();
  }, []);

  const handleEnviar = () => {
    // Actualizamos el estado de la solicitud
    solicitud.medico = medicoSeleccionado;
    solicitud.estado = "Asignado";

    // Actualizamos la tabla
    // ...
  };

  return (
    <div>
      <FormContainer>
        <Sidebar />
        <FormWrapper>
          <FormTitle>Asignar médico</FormTitle>
          <StyledForm onSubmit={handleEnviar}>
            <SelectWrapper>
              <SelectLabel>Seleccionar médico:</SelectLabel>
              <StyledSelect
                value={medicoSeleccionado}
                onChange={(e) => setMedicoSeleccionado(e.target.value)}
              >
                <option value=""></option>
                {medicos.map((medico) => (
                  <option key={medico.id} value={medico.especialidad}>
                    {medico.especialidad}
                  </option>
                ))}
                
              </StyledSelect>
            </SelectWrapper>
            <SubmitButton type="submit">Asignar</SubmitButton>
          </StyledForm>
        </FormWrapper>
      </FormContainer>
    </div>
  );
};
export default FormAsignar;
