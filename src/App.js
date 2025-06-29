import './App.css'
import React, { useState } from 'react';

function App() {

  const [hearts, setHearts] = useState([]);

  const handleClick = () => {
    const newHearts = Array.from({ length: 20 }).map((_, index) => ({
      id: Date.now() + index,
      left: Math.random() * 100, // в % по ширине экрана
      top: Math.random() * 100,  // в % по высоте экрана
    }));

    setHearts((prev) => [...prev, ...newHearts]);

    // удаляем сердца через 2 сек
    setTimeout(() => {
      setHearts((prev) => prev.slice(newHearts.length));
    }, 2000);
  };

  return (
      <div className={'App'}>
        <div className={'main-container'}>
          <p>
            Любимая Сонечка, хочу пригласить тебя на свой день рождения!
          </p>
          <span>
                    30.06.2025
                </span>
        </div>
        <button className="main-button" onClick={handleClick}>
          Я приду
        </button>

        {hearts.map((heart) => (
            <span
                key={heart.id}
                className="heart"
                style={{
                  left: `${heart.left}%`,
                  top: `${heart.top}%`,
                }}
            >
                    ❤️
                </span>
        ))}
        <div className={'footer'}>
          <ul>
            <li>
              <a href="https://chiliclub.ru/bowling" target="_blank" rel="noreferrer">
                <i className="fa fa-facebook" aria-hidden="true"></i>
                <span> - Боулинг</span>
              </a>
            </li>
            <li>
              <a href="https://maccheroniciao.ru/" target="_blank" rel="noreferrer">
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <span> - Ресторан</span>
              </a>
            </li>
            <li>
              <a href="https://yandex.ru/maps/org/melodiya/179147332865/?ll=60.618679%2C56.842740&z=16" target="_blank" rel="noreferrer">
                <i className="fa fa-google-plus" aria-hidden="true"></i>
                <span> - Бар</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default App
