import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import projects from '../../assets/projects.json';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Section = styled.div`
  height: 78vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow-y: auto;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%; 
  max-width: 1200px; 
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
  gap: 20px;
`;

const Desc =  styled.p`
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  white-space: pre-wrap;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
  gap: 20px;
`;

const StyledCarousel = styled(Carousel)`
  width: 100%; // Adjust width as needed
  max-width: 500px; // Max width of carousel
  max-height: 400px; // Max width of carousel
  margin: auto; // Center the carousel

  .carousel .slide {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .carousel.carousel-slider {
    height: 100%;
  }

  .carousel .control-arrow, .carousel.carousel-slider .control-arrow {
    // Optional: customize arrow appearance
  }

  .carousel .thumb {
    // Optional: customize thumbnails
  }
`;

const ProjectImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
`;

function Detail() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id.toString() === projectId);

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300'; // Placeholder image URL
  };

  if (!project) {
    return <p>Project not found.</p>;
  } 

  return (
    <Section>
      <Container>
      <Left>
          <StyledCarousel autoPlay interval={3000} infiniteLoop>
            {project.images.map((image, index) => (
              <div key={index}>
                <ProjectImage
                  src={image}
                  alt={`${project.title} - ${index + 1}`}
                  onError={handleImageError}
                />
              </div>
            ))}
          </StyledCarousel>
        </Left>
        <Right>
          <Desc>{project.description}</Desc>
          {/* You can add more details based on your project structure */}
        </Right>
      </Container>
    </Section>
  );
}

export default Detail;