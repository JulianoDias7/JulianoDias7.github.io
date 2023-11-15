const FuncionarioCard = ({ funcionario }) => {
  if (!funcionario || typeof funcionario !== 'object') {
    return <div>Funcionário inválido</div>;
  }
  const { name, mat, registered, salario, picture, idade } = funcionario;

  return (
    <div className="shadow rouded-3 position-absolute top-50 start-50 translate-middle w-50 ms-5 mt-5 p-2">
      <div className="">
      <img src={picture} alt={"foto de " + name} />
      <h2>{name}</h2>
      <p>Idade: {idade}</p>
      </div>
      <p>Matrícula: {mat}</p>
      <p>Salário: {"R$" + salario}</p>
      <p>Data de Admissão: {registered}</p>
      

    </div>
  );
};

export default FuncionarioCard;
