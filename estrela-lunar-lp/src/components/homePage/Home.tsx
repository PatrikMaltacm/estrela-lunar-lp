import { useState } from 'react'
import './Home.css'

function Home() {

  return (
    <div className='main'>
      <header className='header'>
        <div className='name'>
            <h2 >Estrela Lunar</h2>
        </div>
        <div className='content-header'>
            <nav className='navbar'>
                <a href="#sobre" className='btn-link'>Sobre</a>
                <a href="" className='btn-link'>Entrega</a>
                <a href="" className='btn-link'>Contato</a>
            </nav>
        </div>
      </header>
      <section id='inicio'>
        <div className='content-start'>
          <img src="" alt="Logotipo da loja"/>
          <div className='text-content-start'>
            <h1 className='name-loja'>Estrela Lunar</h1>
            <h2 className='sub-titulo'>O simples e elegante</h2>
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
    </div>
  )
}

export default Home
