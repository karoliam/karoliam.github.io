import './App.css'
import Gallery from './components/gallery'
import 'bootstrap/dist/css/bootstrap.min.css';
import PortfolioPage from './pages/PortfolioPage';
import PageFooter from './components/PageFooter';
function App() {

  return (
    <>
    <div className="page-container">    
    <aside />
    <PortfolioPage></PortfolioPage>
    <aside />
    </div>
    <PageFooter></PageFooter>
    </>
  )
}

export default App
