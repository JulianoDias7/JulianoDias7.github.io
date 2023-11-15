import React, { useState } from 'react';
import FuncionarioCard from './FuncionarioCard';
import funcionarios from './DadosFuncionarios';

const RH = () => {
  const [selectedFuncionario, setSelectedFuncionario] = useState(funcionarios[0]);

  const handleFuncionarioSelect = (funcionario) => {
    setSelectedFuncionario(funcionario);
  };

  const getTopVendedores = () => {
    const vendedoresOrdenados = funcionarios
      .filter((funcionario) => funcionario.quantidadeVendas !== undefined)
      .sort((a, b) => b.quantidadeVendas - a.quantidadeVendas);

    const top10Vendedores = vendedoresOrdenados.slice(0, 10);

    return top10Vendedores;
  };

  return (
    <div className="text-center mt-3">
      <h3 className="text-with-shadow">RH</h3>
      <div>
        <label htmlFor="funcionarioDropdown">Selecione um Funcionário:</label>
        <select
          id="funcionarioDropdown"
          onChange={(e) => handleFuncionarioSelect(funcionarios.find((f) => f.mat === e.target.value))}
        >
          <option value="" disabled selected>
            Escolha um funcionário
          </option>
          {funcionarios.map((funcionario) => (
            <option key={funcionario.mat} value={funcionario.mat}>
              {funcionario.name}
            </option>
          ))}
        </select>

        <div className='d-flex'>
          {selectedFuncionario && <FuncionarioCard funcionario={selectedFuncionario} />}
          <div className='position-absolute shadow top-50 translate-middle-y mt-5 me-3 p-3 rounded-3'>
            <h4>Top 10 Vendedores</h4>
            <ul className='list-group'>
              {getTopVendedores().map((vendedor) => (
                <li className='list-group-item' key={vendedor.mat}>
                  {vendedor.name} - Vendas: R$ {vendedor.quantidadeVendas}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RH;
