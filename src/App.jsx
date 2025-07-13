import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import './App.css'

// Importando os dados dos livros
import booksData from './books_data.json'

// Importando as capas dos livros
import CapaDacamaaosucesso from './assets/CapaDacamaaosucesso.png'
import CapaResistenciaaInsulina from './assets/CapaResistênciaaInsulina.png'
import Capa5rituaismatinaisparaficarrico from './assets/Capa5rituaismatinaisparaficarrico.png'
import CapaDesperteseuPotencial from './assets/CapaDesperteseuPotencial.png'

// Importando os ícones da seção de valores
import iconeConteudoExclusivo from './assets/icone-conteudo-exclusivo.png'
import iconeAtendimentoPersonalizado from './assets/icone-atendimento-personalizado.png'
import iconeTransformacaoReal from './assets/icone-transformacao-real.png'
import iconeAutenticidade from './assets/icone-autenticidade.png'
import iconeComunidade from './assets/icone-comunidade.png'
import iconeExcelencia from './assets/icone-excelencia.png'
import Footer from './Footer.jsx'

// Importando as páginas de conteúdo
import AboutPage from './AboutPage.jsx'
import ContactPage from './ContactPage.jsx'
import PrivacyPolicyPage from './PrivacyPolicyPage.jsx'

// Importando o componente ScrollToTop
import ScrollToTop from './components/ScrollToTop.jsx'

const bookCovers = {
  "Da Cama ao Sucesso: Como começar o dia com Energia e Clareza": CapaDacamaaosucesso,
  "Resistência à Insulina": CapaResistenciaaInsulina,
  "5 Rituais Matinais para Ficar Rico": Capa5rituaismatinaisparaficarrico,
  "Desperte Seu Potencial: Um Guia de Transformação Pessoal": CapaDesperteseuPotencial,
}

const categories = [
  {
    id: 'lancamentos',
    title: 'Lançamentos',
    description: 'Novos ebooks publicados semanalmente',
    image: lancamentos,
    featured: true
  },
  {
    id: 'caixa-de-ideias',
    title: 'Caixa de Ideias',
    description: 'Conhecimentos gerais e cultura',
    image: caixaDeIdeias
  },
  {
    id: 'espiritualidade',
    title: 'Espiritualidade',
    description: 'Espiritualidade e bem-estar espiritual',
    image: espiritualidade
  },
  {
    id: 'mapa-da-mina',
    title: 'Mapa da Mina',
    description: 'Desenvolvimento pessoal e crescimento',
    image: mapaDaMina
  },
  {
    id: 'mente-resiliente',
    title: 'Mente Resiliente',
    description: 'Psicologia e saúde mental',
    image: menteResiliente
  },
  {
    id: 'pet-friendly',
    title: 'Pet Friendly',
    description: 'Animais de Estimação',
    image: petFriendly
  },
  {
    id: 'reborn-lovers',
    title: 'Reborn',
    description: 'Bebê Reborn',
    image: rebornLovers
  },
  {
    id: 'saude-e-nutricao',
    title: 'Saúde e Nutrição',
    description: 'Bem-estar físico e alimentação saudável',
    image: saudeENutricao
  },
  {
    id: 'divertidamente',
    title: 'Divertidamente',
    description: 'Humor e entretenimento',
    image: divertidamente
  },
  {
    id: 'fitness',
    title: 'Fitness',
    description: 'Exercícios e condicionamento físico',
    image: fitness
  },
  {
    id: 'arquivo-x',
    title: 'Arquivo X',
    description: 'Mistérios e fenômenos inexplicáveis',
    image: arquivoX
  },
  {
    id: 'tecnologia',
    title: 'Tecnologia',
    description: 'Inovação e tecnologia digital',
    image: tecnologia
  },
  {
    id: 'pocket',
    title: 'Pocket',
    description: 'Leituras rápidas e práticas',
    image: pocket
  }
]

// Componente para exibir sinopse
function Synopsis({ text }) {
  return (
    <p className="text-muted-foreground mb-4 text-sm text-center">
      {text}
    </p>
  )
}

// Componente da página inicial
function HomePage() {
  const navigate = useNavigate()
  
  const featuredCategory = categories.find(cat => cat.featured)
  const regularCategories = categories.filter(cat => !cat.featured)

  const handleCategoryClick = (categoryId) => {
    navigate(`/categoria/${categoryId}`)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <img 
              src="/assets/logomarca.jpeg" 
              alt="Essência Vital" 
              className="h-24 w-24 rounded-full object-cover shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Essência Vital</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Transforme sua vida com nossos e-books exclusivos. Conhecimento essencial para despertar seu potencial e viver com propósito.
          </p>
        </div>
      </header>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Conteúdo Exclusivo */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <img 
                  src={iconeConteudoExclusivo} 
                  alt="Conteúdo Exclusivo"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Conteúdo Exclusivo</h3>
              <p className="text-muted-foreground text-sm">
                E-books únicos e cuidadosamente elaborados por especialistas em cada área.
              </p>
            </div>

            {/* Atendimento Personalizado */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <img 
                  src={iconeAtendimentoPersonalizado} 
                  alt="Atendimento Personalizado"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Atendimento Personalizado</h3>
              <p className="text-muted-foreground text-sm">
                Suporte direto via WhatsApp para esclarecer dúvidas e orientações.
              </p>
            </div>

            {/* Transformação Real */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <img 
                  src={iconeTransformacaoReal} 
                  alt="Transformação Real"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Transformação Real</h3>
              <p className="text-muted-foreground text-sm">
                Metodologias práticas que geram resultados concretos na sua vida.
              </p>
            </div>

            {/* Autenticidade */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <img 
                  src={iconeAutenticidade} 
                  alt="Autenticidade"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Autenticidade</h3>
              <p className="text-muted-foreground text-sm">
                Valorizamos conteúdos genuínos e práticos que realmente fazem a diferença na vida das pessoas.
              </p>
            </div>

            {/* Comunidade */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <img 
                  src={iconeComunidade} 
                  alt="Comunidade"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Comunidade</h3>
              <p className="text-muted-foreground text-sm">
                Construímos uma comunidade de pessoas comprometidas com o crescimento pessoal e a transformação.
              </p>
            </div>

            {/* Excelência */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <img 
                  src={iconeExcelencia} 
                  alt="Excelência"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Excelência</h3>
              <p className="text-muted-foreground text-sm">
                Buscamos sempre a mais alta qualidade em nossos conteúdos e no atendimento aos nossos leitores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Category */}
      {featuredCategory && (
        <section className="py-12 px-4 bg-secondary/20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="bg-card rounded-xl shadow-lg p-8 max-w-md mx-auto">
              <img 
                src={featuredCategory.image} 
                alt={featuredCategory.title}
                className="w-48 h-48 mx-auto mb-6 rounded-lg object-cover"
              />
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                {["Pet Friendly", "Reborn", "Pocket"].includes(featuredCategory.title) ? (
                  <span translate="no">{featuredCategory.title}</span>
                ) : (
                  featuredCategory.title
                )}
              </h3>
              <p className="text-muted-foreground mb-6 text-center">
                {featuredCategory.description}
              </p>
              <Button 
                size="lg" 
                className="w-full"
                onClick={() => handleCategoryClick(featuredCategory.id)}
              >
                Ver Ebooks
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Categories Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Categorias de Ebooks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {regularCategories.map((category) => (
              <div 
                key={category.id}
                className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => handleCategoryClick(category.id)}
              >
                <div className="aspect-square">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-3 text-card-foreground">
                   {["Pet Friendly", "Reborn", "Pocket"].includes(category.title) ? (
                     <span translate="no">{category.title}</span>
                   ) : (
                     category.title
                   )}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {["Pet Friendly", "Reborn", "Pocket"].includes(category.title) ? (
                      <span translate="no">{category.description}</span>
                    ) : (
                      category.description
                    )}
                  </p>
                  <Button className="w-full">
                    Ver Ebooks
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// Componente da página de categoria
function CategoryPage() {
  const { categoryId } = useParams()
  const navigate = useNavigate()
  
  const category = categories.find(cat => cat.id === categoryId)
  
  if (!category) {
    return <div>Categoria não encontrada</div>
  }

  const getBooksByCategory = (categoryTitle) => {
    const normalizedCategory = categoryTitle.replace(/ /g, '').replace(/í/g, 'i').replace(/ê/g, 'e').replace(/ç/g, 'c').toLowerCase()
    return booksData.filter(book => book.category.replace(/ /g, '').replace(/í/g, 'i').replace(/ê/g, 'e').replace(/ç/g, 'c').toLowerCase() === normalizedCategory)
  }

  const categoryBooks = getBooksByCategory(category.title)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <img 
              src="/assets/logomarca.jpeg"
              alt="Essência Vital" 
              className="h-24 w-24 rounded-full object-cover shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Essência Vital</h1>
          <p className="text-xl md:text-2xl opacity-90">
            {category.title}
          </p>
        </div>
      </header>

      {/* Books Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            {category.title}
          </h2>
          
          {categoryBooks.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Nenhum ebook disponível nesta categoria no momento.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryBooks.map(book => (
                <div key={book.title} className="bg-card rounded-xl shadow-lg p-6">
                  <div className="flex flex-col items-center text-center">
                    <img 
                      src={bookCovers[book.title]} 
                      alt={book.title}
                      className="w-32 h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-2xl font-bold mb-2 text-card-foreground">
                      {book.title}
                    </h3>
                    <Synopsis text={book.synopsis} />
                    <p className="text-2xl font-bold text-primary mb-4">
                      {book.value}
                    </p>
                    <a 
                      href={`https://wa.me/5547992428726?text=Olá! Tenho interesse em adquirir este exemplar do site Essência Vital: ${book.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
                    >
                      Adquirir exemplar
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Back to Home Button */}
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



function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categoria/:categoryId" element={<CategoryPage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
      </Routes>
    </Router>
  )
}

export default App


