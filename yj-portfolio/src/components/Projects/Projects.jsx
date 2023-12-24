import styled from 'styled-components';
import projects from '../../assets/projects.json'
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

const ProjectDivider = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
  padding: 3vh 5vw; 
  border-bottom: 1px solid #a75ef8;
  transition: all 0.3s ease;

  &:hover {
    border-radius: 10px;
    background-color: #e3ccfc;
    box-shadow: 0 0 5px #d1acfb;
    transform: scale(1.02);

    p {
      opacity: 1;
    }
  }

  h3 {
    margin: 0;
    font-size: 1.3em; 
    font-family: 'Ubuntu';
  }

  p {
    opacity: 0;
    color: #666;
    font-size: 1.0em;
    font-family: 'Ubuntu'
  }
`;


function Projects() {

  return (
    <Section>
      <Container>
        {projects.map((project, index) => (
          <ProjectDivider to={`/project_detail/${project.id}`} key={index}>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            {/* You can add more project details here */}
          </ProjectDivider>
        ))}
      </Container>
    </Section>
  );
}

export default Projects;
