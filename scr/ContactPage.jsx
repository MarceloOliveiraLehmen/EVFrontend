import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import Footer from './Footer.jsx'

function ContactPage() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Contato</h1>
        </div>
      </header>
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-muted-foreground leading-relaxed">
          <p className="mb-4">
            Fale com a equipe da Essência Vital.
            Estamos à disposição para esclarecer dúvidas, oferecer suporte ou ouvir suas sugestões.
          </p>
          <p className="mb-2">
            📱 WhatsApp:{" "}
               <a
                href="https://wa.me/5547992428726"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 underline"
              >
                47 99242-8726
              </a>          
            </p>
          <p className="mb-2">
            📧E-mail:{" "}
               <a
                href="mailto:aessenciavital25@gmail.com"
                className="text-green-700 underline"
              >
                aessenciavital25@gmail.com
              </a>
            </p>
          <p className="mb-4">
            📷 Instagram:{" "}
               <a
                href="https://instagram.com/aessenciavital25"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 underline"
              >
                @aessenciavital25
              </a>
            </p>
          <p className="mb-4">
            Entre em contato pelo canal que for mais conveniente para você. Nosso time responde o mais breve possível!
          </p>
        </div>
      </section>
      <div className="text-center py-8">
        <Button 
          size="lg" 
          onClick={() => navigate('/')}
        >
          Voltar ao Início
        </Button>
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage


