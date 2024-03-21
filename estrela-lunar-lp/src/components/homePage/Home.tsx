import { useState } from 'react'
import './Home.css'

function Home() {

  return (
    <div className='main'>
      <header className='header'>
        <div className='name'>
            <a href="#inicio">
              <h2 >Estrela Lunar</h2>
            </a>
        </div>
        <div className='content-header'>
            <nav className='navbar'>
                <a href="#sobre" className='btn-link'>Sobre</a>
                <a href="#entrega" className='btn-link'>Entrega</a>
                <a href="" className='btn-link'>Contato</a>
            </nav>
        </div>
      </header>
      <section id='inicio'>
        <div className='content-start'>
          <div className='container-image'>
            <img src="logo-s.png" className='logo-i' alt="Logotipo da loja"/>
          </div>
          <div className='text-content-start'>
            <h1 className='name-loja'>Estrela Lunar</h1>
            <h2 className='sub-titulo'>O simples, descontraido e elegante</h2>
          </div>
        </div>
      </section>

      <section id='sobre'>
        <div className='content-sobre'>
            <div className='text-area'>
                <h2>Sobre nossa loja</h2>
                <p>
                    Somos uma loja de assessórios artesanais para todos os
                    gostos. Fazemos tudo personalizado no seu estilo e com
                    suas caracteriscas com muito amor e carinho
                </p>
            </div>
            <img src="produto-1.PNG" className='img-p' alt="Imagem de produto"/>
        </div>
      </section>
      <div className='division-section'></div>
      <section id='entrega'>
        <div className="content-delivery">
          <img src="entregador.jpg" className='img-p' alt="Imagen entregador" />
          <div className='text-area'>
            <h2>Chega na sua casa</h2>
            <p>
              Entregamos em toda região de Porto-Velho e Candeias do jamari.<br/>
              <strong>Taxa calculada pelo aplicativo de entrega.</strong>
            </p>
          </div>
        </div>
      </section>
      <div className='division-section'></div>
    </div>
  )
}

export default Home
