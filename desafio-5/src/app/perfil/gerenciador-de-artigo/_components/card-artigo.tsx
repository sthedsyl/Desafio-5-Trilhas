import DeleteDialog from './dialog/delete';
import EditDialog from './dialog/edit';

const Card = () => {
  return (
    <div className="bg-[#B9D1DD] border-1 border-tertiary rounded-lg p-6 flex justify-between items-start mb-4 w-1/2">
        <div>
          <h2 className="text-tertiary text-xl font-semibold mb-2">Título do Artigo</h2>
          <p className="text-secondary text-base">Nome do Autor</p>
        </div>
        
        <div className="flex gap-3">
          <EditDialog /> 
          <DeleteDialog />
        </div>
    </div>
  )
}

export default Card;