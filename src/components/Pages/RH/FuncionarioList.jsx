import React, { useState } from 'react';
import FuncionarioCard from './FuncionarioCard';

const FuncionarioList = ({ funcionarios }) => {
  const [selectedFuncionario, setSelectedFuncionario] = useState(null);

  const handleFuncionarioSelect = (funcionario) => {
    setSelectedFuncionario(funcionario);
  };

  return (
    <div className='position-relative'>
      <label htmlFor="funcionarioDropdown">Selecione um Funcionário:</label>
      <select
        id="funcionarioDropdown"
        onChange={(e) => handleFuncionarioSelect(JSON.parse(e.target.value))}
      >
        <option value="" disabled selected>
          Escolha um funcionário
        </option>
        {funcionarios.map((funcionario) => (
          <option key={funcionario.id} value={JSON.stringify(funcionario)}>
            {funcionario.nome}
          </option>
        ))}
      </select>

      {selectedFuncionario && <FuncionarioCard funcionario={selectedFuncionario} />}
    </div>
  );
};

export default FuncionarioList;
