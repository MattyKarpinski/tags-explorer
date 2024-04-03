import './App.css';
import DataTable  from './components/dataTable';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='container'>
      <Header/>
      <DataTable/>
      <Footer/>
    </div>

  )
}

export default App
