import Gallery from '../components/gallery';
import projectList from '../utils/projectList';

const PortfolioPage = () => {


  return(
<Gallery list={projectList}></Gallery>
  );
}
export default PortfolioPage;