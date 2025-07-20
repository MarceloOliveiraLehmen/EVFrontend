import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import Footer from './Footer.jsx'

function AboutPage() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Sobre Nós</h1>
        </div>
      </header>
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-muted-foreground leading-relaxed">
          <p className="mb-4">
            A Essência Vital nasceu com um propósito claro: levar qualidade de vida e conhecimento a cada pessoa que confia no nosso trabalho. Somos uma equipe comprometida em transformar rotinas por meio de consultorias online e treinamentos personalizados, sempre respeitando as particularidades e objetivos de cada cliente.
          </p>
          <p className="mb-4">
            Acreditamos que cuidar da saúde vai muito além de praticar exercícios — é um processo que envolve informação, orientação adequada e, principalmente, a construção de hábitos que façam sentido para a vida de cada um.
          </p>
          <p className="mb-4">
            Foi dessa visão que surgiu nosso projeto de desenvolvimento de eBooks. Ampliamos nosso trabalho para oferecer conteúdos práticos e acessíveis, com a intenção de expandir o conhecimento dos nossos clientes e proporcionar autonomia nas escolhas do dia a dia. São materiais que vão desde saúde e bem-estar até desenvolvimento pessoal e profissional, sempre com a qualidade e responsabilidade que você merece.
          </p>
          <p className="mb-4">
            Aqui na Essência Vital, cada projeto é feito com dedicação e respeito a quem mais importa: você. Seguimos evoluindo, aprendendo e construindo, lado a lado com quem deseja ir além.
          </p>
          <p className="mb-4">
            Seja bem-vindo à Essência Vital — mais conhecimento, mais equilíbrio, mais vida.
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

export default AboutPage


