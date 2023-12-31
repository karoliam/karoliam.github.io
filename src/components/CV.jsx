import Image from 'react-bootstrap/Image';
import Resume from '../assets/karoliinamultasresume.svg';
import styles from '../css/Cv.module.css';
import resumepdf from '../assets/karoliinamultas-resume.pdf'
const CV = () => {
  const openPdf = () => {
    window.open(resumepdf, '_blank');
  }
  
  return (
    <>
      <div id="cv-section" className={styles.cvSection}>
      <h2 className={styles.cvText}>CV</h2>
      <Image src={Resume} className={styles.resume} />
      <button onClick={openPdf} className={styles.cvButton}>Open CV</button>

      </div>
    </>
  );
}
export default CV;