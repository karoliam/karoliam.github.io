import Image from 'react-bootstrap/Image';
import CvPhoto from '../assets/cvphoto.png';
import styles from '../css/About.module.css';

const About = () => {
  return (
    <>
    <section id="about">
      <div className={styles.aboutContainer}>
        <Image src={CvPhoto} roundedCircle className={styles.cvImage} />
        <div className={styles.infoContainer}>
        <h3>&lt;Hi, I'm Karoliina Multas! /&gt;</h3>
        <p>I'm a third-year software development student with
          a strong background in mobile and web app development,
          covering both front-end and back-end. I'm passionate about clean 
          code and enjoy finding innovative solutions. As a self-driven and
           resourceful individual, I'm eager to learn from my peers and 
           contribute to meaningful projects.</p>
           </div>
      </div>
      </section>
    </>
  )
}
export default About;