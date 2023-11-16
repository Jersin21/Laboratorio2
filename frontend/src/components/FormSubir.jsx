import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const FormContainer = styled.div`
  display: flex;
  margin-left: 250px; /* Ancho del Sidebar */
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const FormTitle = styled.h1`
  margin-bottom: 20px;
  color: #333; /* Cambia el color del título según tu preferencia */
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px; /* Ajusta el ancho máximo según tu diseño */
  margin: 0 auto;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const InputLabel = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

const StyledInput = styled.input`
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

function FormSubir() {
  const [nombreArchivo, setNombreArchivo] = useState('');

  const handleSubirArchivo = () => {
    // Lógica para subir el archivo
    // ...
  };

  return (
    <div>
      <FormContainer>
        <Sidebar />
        <FormWrapper>
          <FormTitle>Subir Archivo</FormTitle>
          <StyledForm>
            <InputWrapper>
              <InputLabel>Nombre del Archivo:</InputLabel>
              <StyledInput
                type="text"
                value={nombreArchivo}
                onChange={(e) => setNombreArchivo(e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <InputLabel>Seleccionar Archivo:</InputLabel>
              {/* Input para seleccionar el archivo */}
              <input type="file" />
            </InputWrapper>
            <SubmitButton onClick={handleSubirArchivo}>Subir Archivo</SubmitButton>
          </StyledForm>
        </FormWrapper>
      </FormContainer>
    </div>
  );
}

export default FormSubir;
