import Sidebar from '../componentes/Sidebar';
import Card from '../gerenciador-de-artigo/_components/card-artigo';

const gerenciadorDeArtigos = () => {
  return (
    <main className='flex w-full h-full relative'>
      
      <Sidebar />

      <div className='flex flex-col items-center w-full p-8'>
        <h1 className='text-2xl font-bold mb-8'>Gerenciador de Artigos</h1>

        <Card />
        <Card />
        <Card />
        <Card />

      </div>
        
    

    
    </main>
      

      

    


      
    
  )
}

export default gerenciadorDeArtigos