import logo from './logo.png';
import mobileDashboard from './dashboard.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className='main-section'>
        <div className="">
          <h1 className="heading">
            Now get your perfect style at your favourite salon without any
            waiting!
          </h1>
          <h1 className="heading-2">
            Coming soon...
          </h1>
          {/* <p className="sub-heading">
            Now get your perfect style at your favourite salon without any
            waiting!
          </p> */}
        </div>
        <div className="">
          <img src={mobileDashboard} className="mobile-dashboard-img" alt="logo" />
        </div>
      </section>
    </div>
  );
}

export default App;