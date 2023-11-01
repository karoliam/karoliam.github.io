import styles from '../css/PageFooter.module.css';

const PageFooter = () => {
  return (
<footer className={styles.pageFooter}>
  <p className={styles.footerText}>Copyright @ 2023 Karoliina Multas. Made with React and Vite.</p>
</footer>
  );
}
export default PageFooter;