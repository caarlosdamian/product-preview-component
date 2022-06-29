import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="App">
      <div className="card__container">
        <img src="" alt="" className="card__img" />
        <div className="right__wrapper">
          <h3 className="card__title">PERFUME</h3>
          <h1 className="card__header">Gabrielle Essence Eau De Parfum</h1>
          <span className="card__description"></span>
          <div className="card__price-container">
            <span className="card__price-title"></span>
            <span className="card__price-subtitle"></span>
          </div>
          <button className="card__button"></button>
        </div>
      </div>
    </div>
  )
}

export default App
