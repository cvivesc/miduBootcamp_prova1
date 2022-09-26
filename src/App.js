// import logo from './logo.svg';
import './App.css';
import Mensaje3 from './Mensaje.js'

function App() {

  const mensaje1 = 'Hola mundo!!'
  const Mensaje2 = () => {
    return <h2> Hola Mundo 2 </h2>
  }

  return (
    <div className="App">
      <h1>{mensaje1 + ' Bienvenido'}</h1>
      <Mensaje2 />
      <Mensaje3 color='red' message='Estamos trabajando '/>
      <Mensaje3 color='green' message='en React'/>
      
      <br />
      <strong>{+new Date()}</strong>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
      }
    </div>
  );
}

export default App;
