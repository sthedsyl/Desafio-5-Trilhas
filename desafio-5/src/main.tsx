import { createRoot } from 'react-dom/client'
import './globals.css'
import Layout from './components/Layout'
import App from './app/page'
import Consultas from './app/consultas/page'
import Dashboard from './app/dashboard/page'
import Artigos from './app/artigos/page'
import Login from './app/auth/login/page'
import Signup from './app/auth/signup/page'
import Admin from './app/perfil/admin/page'
import User from './app/perfil/user/page'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="consultas" element={<Consultas />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="artigos" element={<Artigos />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="perfil/admin" element={<Admin />} />
        <Route path="perfil/user" element={<User />} />
      </Route>
    </Routes>
  </BrowserRouter>
)