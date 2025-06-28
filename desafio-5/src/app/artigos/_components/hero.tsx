const Hero = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center text-center p-12 gap-6 relative">
      <h1 className="text-3xl font-semibold" >Artigos & Revistas</h1>
      <p className="text-primary font-medium text-lg">Aqui você terá acesso a artigos sobre saúde em geral!</p>
    </div>

    <div className="w-full flex items-center justify-center p-12">
      <input 
        type="text" 
        placeholder="Palvras-chave (ex: dengue, malefícios, prevenção)"
        className="w-full max-w-md p-3 border border-tertiary rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" 
                
      />
      <button className="ml-4 bg-tertiary hover:bg-primary text-white font-medium px-6 py-3 rounded-md shadow-sm" 
        onClick={() => 
          alert('Função de busca ainda não implementada')
        }
      >
        Buscar
      </button>
    </div>
    
    </>
  )
}

export default Hero