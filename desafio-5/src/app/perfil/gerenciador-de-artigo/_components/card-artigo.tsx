import ferramenta_lapis from '../../../../assets/icons/ferramenta-lapis.svg';
import lixeira from '../../../../assets/icons/lixeira.svg';

const Card = () => {
  return (
    <div className="bg-[#B9D1DD] border-1 border-tertiary rounded-lg p-6 flex justify-between items-start mb-4 w-1/2">
        <div>
          <h2 className="text-tertiary text-xl font-semibold mb-2">Titulo do Artigo</h2>
          <p className="text-secondary text-base">Nome do Autor</p>
        </div>
        
        <div className="flex gap-3">
          <img src={ferramenta_lapis} alt="Editar" className="w-6 h-6 cursor-pointer hover:opacity-80" />
          <img src={lixeira} alt="Excluir" className="w-6 h-6 cursor-pointer hover:opacity-80" />
        </div>
    </div>
  )
}

export default Card;