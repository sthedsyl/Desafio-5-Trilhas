import Logo1 from '../assets/logo_1.svg'

const Header = () => {
  return (

     <header className='w-full flex justify-end items-center gap-6 p-6 text-primary md:text-sm font-medium'>
        <img src={Logo1} alt="logo"/>
        <nav className='w-full flex justify-end items-center gap-6' >
          <a href="">Início</a>
          <a href="">Consultas</a>
          <a href="">Dashboard</a>
          <a href="">Artigos</a>
          <a href=""className='bg-tertiary hover:bg-primary text-background font-semibold py-2 px-6 rounded-md'>Entrar</a>
        </nav>
      </header>
  )
}

export default Header