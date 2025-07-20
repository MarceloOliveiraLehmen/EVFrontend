import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import Footer from './Footer.jsx'

function PrivacyPolicyPage() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Política de Privacidade</h1>
        </div>
      </header>
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-muted-foreground leading-relaxed">
          <p className="mb-4 font-bold">A sua privacidade é prioridade para nós. Esta Política de Privacidade descreve como coletamos, usamos e protegemos as informações que você fornece ao utilizar o site da Essência Vital.</p>

          <h3 className="text-xl font-bold mb-2 text-foreground">Coleta de Informações</h3>
          <p className="mb-4">
            Ao realizar uma compra ou se cadastrar em nosso site, coletamos algumas informações pessoais, como nome, e-mail, telefone e dados necessários para pagamento. Essas informações são essenciais para que possamos processar seus pedidos e prestar um atendimento eficiente.
          </p>
          <p className="mb-4">
            Também utilizamos cookies e tecnologias semelhantes para melhorar sua experiência de navegação. Essas informações são utilizadas de forma agregada e anônima sempre que possível.
          </p>

          <h3 className="text-xl font-bold mb-2 text-foreground">Uso das Informações</h3>
          <p className="mb-4">
            As informações que coletamos são utilizadas exclusivamente para:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>Processamento de compras e entrega dos produtos digitais adquiridos;</li>
            <li>Envio de e-mails informativos e promocionais (caso você autorize);</li>
            <li>Atendimento a solicitações ou dúvidas;</li>
            <li>Melhoria contínua dos nossos serviços e da experiência de navegação no site.</li>
          </ul>

          <h3 className="text-xl font-bold mb-2 text-foreground">Compartilhamento de Dados</h3>
          <p className="mb-4">
            A Essência Vital não compartilha, vende ou aluga suas informações pessoais a terceiros. Apenas parceiros essenciais para o funcionamento do site e processamento de pagamentos têm acesso a determinados dados, sempre respeitando a sua privacidade e segurança.
          </p>

          <h3 className="text-xl font-bold mb-2 text-foreground">Segurança dos Dados</h3>
          <p className="mb-4">
            Adotamos práticas seguras de armazenamento e proteção de informações para evitar acessos não autorizados, alterações ou divulgações indevidas.
          </p>

          <h3 className="text-xl font-bold mb-2 text-foreground">Direitos do Usuário</h3>
          <p className="mb-4">
            Você tem o direito de acessar, corrigir ou solicitar a exclusão dos seus dados pessoais a qualquer momento. Basta entrar em contato pelo nosso canal oficial de atendimento.
          </p>

          <h3 className="text-xl font-bold mb-2 text-foreground">Alterações nesta Política</h3>
          <p className="mb-4">
            Podemos atualizar esta Política de Privacidade sempre que necessário, e as alterações serão publicadas nesta página. Recomendamos que você consulte este documento periodicamente.
          </p>

          <h3 className="text-xl font-bold mb-2 text-foreground">Contato</h3>
          <p className="mb-4">
            Em caso de dúvidas sobre esta Política ou sobre o uso das suas informações pessoais, entre em contato conosco pelo e-mail: <a href="mailto:aessenciavital25@gmail.com" className="text-primary hover:underline">aessenciavital25@gmail.com</a>
          </p>

          <p className="mb-4">
            Ao utilizar o site da Essência Vital, você declara estar ciente e de acordo com os termos desta Política de Privacidade.
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

export default PrivacyPolicyPage


