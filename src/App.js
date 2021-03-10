// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './pages/Login';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

function App() {
   const [modalLogin, setModalLogin] = useState(false);

  return (
    <div>
      <Button variant="primary" onClick={() => setModalLogin(true)}>
        Login
      </Button>

      <Login
        show={modalLogin}
        onHide={() => setModalLogin(false)}
      />
    </div>
  );
}

export default App;
