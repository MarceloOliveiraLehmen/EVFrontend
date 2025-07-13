import React from 'react'
import { Link } from 'react-router-dom'
import logomarca from './assets/logomarca.jpeg'

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-4">
          <img 
            src={logomarca} 
            alt="Essência Vital" 
            className="h-24 w-24 rounded-full object-cover shadow-lg"
          />
        </div>
        <h3 className="text-2xl font-bold mb-2">Essência Vital</h3>
        <p className="text-lg opacity-90 mb-4">E-books transformadores</p>
        <p className="text-sm opacity-90 mb-8 max-w-xl mx-auto">
          Conectando você ao conhecimento essencial para uma vida plena e com propósito. 
          Transforme sua realidade através do aprendizado.
        </p>

        <div className="flex justify-center space-x-6 mb-4">
          <Link to="/sobre" className="hover:opacity-80 transition-opacity">
            Sobre
          </Link>
          <Link to="/contato" className="hover:opacity-80 transition-opacity">
            Contato
          </Link>
          <Link to="/politica-de-privacidade" className="hover:opacity-80 transition-opacity">
            Política de Privacidade
          </Link>
        </div>

        <p className="text-sm opacity-75 mb-2 flex items-center justify-center">
          Feito com <span className="text-red-400 mx-1">❤</span> pela Essência Vital
        </p>

        <p className="text-xs opacity-60">
          © 2025 Coletânea de Ebooks. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer


