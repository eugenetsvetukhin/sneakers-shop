import React from 'react';

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className='headerLeft'>
          <img width={40} height={40} src='/img/logo.png' alt='logo'/>
          <div>
            <h3>React Sneakers</h3>
            <p className='logoText'>Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className='headerRight'>
          <li>
          <img width={18} height={18} src='/img/cart.svg' alt='logo'/>
            <span>1205 hrn</span>
          </li>
          <li>
          <img width={18} height={18} src='/img/user.svg' alt='logo'/>
          </li>
        </ul>
      </header>


      <div className='content'>
        <h1>Все кросовки</h1>

        <div className='sneakers'>

        <div className='card'>
          <img width={133} height={112} src="/img/sneakers/1.jpg" alt="sneaker" />
          <h5>
          Мужские Кроссовки Nike Blazer Mid Suede
          </h5>
          <div className='cardBottom'> 
            <div className='cardInfo'>
              <span>Цена:</span>
              <b>12 999 hrn</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>

        <div className='card'>
          <img width={133} height={112} src="/img/sneakers/2.jpg" alt="sneaker" />
          <h5>
          Мужские Кроссовки Nike Blazer Mid Suede
          </h5>
          <div className='cardBottom'> 
            <div className='cardInfo'>
              <span>Цена:</span>
              <b>12 999 hrn</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>

        <div className='card'>
          <img width={133} height={112} src="/img/sneakers/3.jpg" alt="sneaker" />
          <h5>
          Мужские Кроссовки Nike Blazer Mid Suede
          </h5>
          <div className='cardBottom'> 
            <div className='cardInfo'>
              <span>Цена:</span>
              <b>12 999 hrn</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>

        <div className='card'>
          <img width={133} height={112} src="/img/sneakers/4.jpg" alt="sneaker" />
          <h5>
          Мужские Кроссовки Nike Blazer Mid Suede
          </h5>
          <div className='cardBottom'> 
            <div className='cardInfo'>
              <span>Цена:</span>
              <b>12 999 hrn</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>

        </div>


      </div>

    </div>
  );
}

 export default App;
