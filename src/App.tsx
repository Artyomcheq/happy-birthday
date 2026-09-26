import './App.css';

function App() {
  return (
    <div className="field">
      <div className="container">
        <div className="card">
          
          <div className="card-img-second">
            <img className='card-img-second-img1' src="/shariki.png" alt="decor" />
            <img className='card-img-second-img2' src="/cvetoshki.png" alt="cvetoshki" />
            <img className='card-img-second-img3' src="/cvetochki2.png" alt="cvetoshki2" />
          </div>

          <div className="card-header">
            <div className="card-img-first">
              <img src="/jopa.png" alt="profile" className="img-main" />
            </div>
          </div>

          <div className="card-content">
            <span className="subtitle">ПРИГЛАШЕНИЕ НА ЮБИЛЕЙ</span>
            <h1 className="title">Приглашаю тебя на мой день рождения</h1>
            <p className="description">
              Разделите со мной этот особенный вечер в атмосфере праздника и искусства!
            </p>

            <div className="divider"></div>

            <div className="info-block">
              <div className="info-item">
                <span className="info-label">ДАТА И ВРЕМЯ</span>
                <span className="info-value">6 октября, 19:00</span>
              </div>
              <div className="info-item">
                <span className="info-label">МЕСТО ПРОВЕДЕНИЯ</span>
                <span className="info-value highlight">Театр оперы и балета</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;