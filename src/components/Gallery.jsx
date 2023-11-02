import Carousel from 'react-bootstrap/Carousel';
import styles from '../css/Gallery.module.css';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';


function Gallery({list}) {
  return (
    <>
    <section id="projects">
    <h2 className={styles.titles}>Projects</h2>
      <div className={styles.galleryContainer}>
        {list.map((project, index) => (
          <div key={index} className={styles.oneCarousel}>
            {/* <h2>{project.title}</h2> */}
            <Carousel controls={true} keyboard={true} touch={true} variant="dark">
              {project.pictures.map((pic, picIndex) => (
                <Carousel.Item key={picIndex}>
                  {pic.video ?
                    <video width="300px" height="500px" controls>
                      <source src={pic.source} type="video/mp4" />
                    </video> :
                    <img src={pic.source} alt={pic.alt} width={pic.width} height="600px" className={styles.galleryPic} />
                  }
                </Carousel.Item>
              ))}
            </Carousel>
            <Card bg="light" text="dark" className={`mb-2 ${styles.cardContainer}`}>
              <Card.Header>{project.title}</Card.Header>
              <Card.Body>
                <Card.Text id="description">
                  {project.description}
                </Card.Text>
                <div className={styles.pillContainer}>
                  <Stack direction="horizontal" gap={2}>
                    {project.techStack.map((item, index) => (
                      <Badge pill bg="dark" key={index} className={styles.listItem}>{item}</Badge>
                    ))}
                  </Stack>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      </section>
      </>
  );
}

Gallery.propTypes = {
  list: PropTypes.array,
};

export default Gallery;
