import './App.css'
import Gallery from './components/gallery'
import 'bootstrap/dist/css/bootstrap.min.css';
import PortfolioPage from './pages/PortfolioPage';
function App() {

  return (
    <>
    <div className="page-container">    
    <aside />
    <PortfolioPage></PortfolioPage>
    <aside />
    </div>

    </>
  )
}

export default App
