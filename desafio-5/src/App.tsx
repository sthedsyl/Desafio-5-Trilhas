import './App.css';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <body>
      <Header/>
      <main className='font-[Poppins, sans-serif]'>        
        <div className='body-style flex items-center justify-center h-screen bg-[#FDFDFD]'>
          <h1>Hello World</h1>
        </div>
      </main>
      <Footer/>
    </body>
  )
}

export default App
