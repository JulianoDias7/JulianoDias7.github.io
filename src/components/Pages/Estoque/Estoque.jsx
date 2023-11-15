import React from 'react';
import ItensEstoque from './itensEstoque';


const Estoque = () => {
  return (
    <div className='text-center'>
      <h2 className='text-with-shadow'>Estoque</h2>
      <div className='w-75 m-auto shadow p-2 rounded-3'>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome do Produto</th>
              <th>Quantidade</th>
              <th>Preço</th>
              <th>Valor Total em Estoque</th>
            </tr>
          </thead>
          <tbody>
            {ItensEstoque.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.quantidade}</td>
                <td>R$ {item.preco.toFixed(2)}</td>
                <td>{(item.preco*item.quantidade).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Estoque;
