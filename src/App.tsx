import { useState } from 'react'
import product from './images/image-product-desktop.jpg'
import icon from './images/icon-cart.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <div className="card__container">
        <img src={product} alt="product" className="card__img" />
        <div className="right__wrapper">
          <h3 className="card__title">PERFUME</h3>
          <h1 className="card__header">Gabrielle Essence Eau De Parfum</h1>
          <span className="card__description">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</span>
          <div className="card__price-container">
            <span className="card__price-title">$149.99</span>
            <span className="card__price-subtitle">$169.99</span>
          </div>
          <button className="card__button"><img src={icon} alt="icon" />Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default App
