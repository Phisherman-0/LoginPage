import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='body'>
          <img src={logo} className="App-logo" alt="logo" />
          <form>
            <div>
              <label for="user">Username: </label><br/>
              <input type="text" id="user" className='input-field'/>
            </div>
            <div>
              <label for="pass">Password: </label><br/>
              <input type='password' id='pass' className='input-field'/>
            </div><br/>

            <button className='submit'>Submit</button>
          </form>
        </div>
      </header>
      
    </div>
  );
}

export default App;
