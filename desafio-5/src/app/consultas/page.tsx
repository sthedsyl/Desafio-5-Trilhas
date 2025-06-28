import { useState } from 'react';
import MedicoImage from '../../assets/medico-ilustracao.png';

const Consultas = () => {
  const [cep, setCep] = useState('');
  const [resultados, setResultados] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const cepValido = cep.length === 8;

  const buscarCep = async () => {
    if (!cepValido) {
      setError('Digite um CEP válido de 8 números');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setError('CEP não encontrado');
        setResultados([]);
      } else {
        setResultados([data]);
      }
    } catch (error) {
      setError('Erro na busca');
      setResultados([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-center max-w-6xl mx-auto p-6">
      {/* Texto e Formulário */}
      <div className="md:w-1/2 ">
        <h1 className="text-3xl font-bold text-sky-900 mb-4 leading-snug">
          Marcação de <br /> Consultas e Exames
        </h1>
        <p className="text-gray-700 mb-6">
          Aqui você pode encontrar informações sobre as unidades de saúde próximas de você! Marque sua consultas e exames nos locais disponíveis.
        </p>

        {/* Input de CEP */}
        <div className="flex w-full h-12 gap-1">
          <input
            className="flex-1 border border-gray-300 rounded-l-md rounded-r-none px-4 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
            type="text"
            placeholder="Digite seu CEP"
            maxLength={8}
            value={cep}
            onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
          />
          <button 
            className='h-full !rounded-l-none rounded-r-md bg-tertiary hover:bg-primary px-6 text-white font-medium shadow-sm'
            onClick={buscarCep}
            disabled={!cepValido || loading}
          >
            Buscar
          </button>
        </div>

        {/* Erro ou Loading */}
        {error && <p className="text-red-600 mt-2">{error}</p>}
        {loading && <p className="mt-2">Carregando...</p>}

        {/* Resultados */}
        <div className="mt-4">
          {resultados.length > 0 &&
            resultados.map((r, index) => (
              <div
                key={index}
                className="bg-white p-4 border rounded mb-4 shadow-sm"
              >
                <p><strong>CEP:</strong> {r.cep}</p>
                <p><strong>Localidade:</strong> {r.localidade}</p>
                <p><strong>Bairro:</strong> {r.bairro}</p>
                <p><strong>Logradouro:</strong> {r.logradouro}</p>
                <p><strong>UF:</strong> {r.uf}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Ilustração */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={MedicoImage}
          alt="Ilustração médica"
          className="w-64 md:w-80"
        />
      </div>
    </section>
  );
};

export default Consultas;