import './style/App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Logo } from './components/logo/logo';
import { Container } from './components/container/Container';

function App() {
  return (
    <div>
      <Logo/>
      <Navbar/>
      <Container/>
    </div>
  );
}

export default App;
