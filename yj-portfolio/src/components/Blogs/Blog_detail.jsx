import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import blogs from '../../assets/blog.json';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Title =  styled.h1`
  font-size: 60px;  
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  margin: 40px 0;
`;

const Desc =  styled.p`
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  margin: 0 0 -100px;
`;

const StyledCarousel = styled(Carousel)`
  width: 100%;
  max-width: 500px;
  max-height: 400px;
  margin: auto;

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

function BlogDetail() {
  const { blogId } = useParams();
  const blog = blogs.find(p => p.id.toString() === blogId);

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300'; // Placeholder image URL
  };

  if (!blog) {
    return <p>Project not found.</p>;
  } 

  return (
    <Section>
      <Title>{blog.title}</Title>
      <Desc>{blog.description}</Desc>
      <StyledCarousel autoPlay interval={3000} infiniteLoop>
        {blog.images.map((image, index) => (
          <div key={index}>
            <ProjectImage
              src={image}
              alt={`${blog.title} - ${index + 1}`}
              onError={handleImageError}
            />
          </div>
        ))}
      </StyledCarousel>
    </Section>
  );
}

export default BlogDetail;