import styled from 'styled-components';
import blogs from '../../assets/blog.json'
import { Link } from 'react-router-dom'

const Section = styled.div`
display: flex;
justify-content: center; // Aligns container to the center
align-items: center; // Centers container vertically
height: 78vh;
padding: 20px;
`;

const Container =  styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 5vh;
  justify-content: center;
`;

const BlogCard = styled(Link)`
  background: #ebdbfd;
  padding: 15px 60px;
  border-radius: 8px;
  box-shadow: 3px 3px 8px #d1acfb, -3px -3px 8px #efe3fd;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 3px 3px 8px #d1acfb, -3px -3px 8px #efe3fd;
  }

  h3 {
    margin-top: 0;
    font-family: 'Ubuntu';
  }

  p {
    color: #666;
    font-family: 'Ubuntu';
  }
`;

function Blogs() {

  return (
    <Section>
      <Container>
        {blogs.map((blog, index) => (
          <BlogCard to={`/blog_detail/${blog.id}`} key={index}>
            <h3>{blog.title}</h3>
            <p>{blog.summary}</p>
            {/* You can add more project details here */}
          </BlogCard>
        ))}
      </Container>
    </Section>
  );
}

export default Blogs;

