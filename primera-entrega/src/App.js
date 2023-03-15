
import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import './styles/index.scss'

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"hola mundo"}/>
    </div>
  );
}

export default App;
