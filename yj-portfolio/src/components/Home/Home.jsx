import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Typewriter from 'react-typewriter-effect';
import profilePic1 from '../../assets/profile_1.jpeg';
import profilePic2 from '../../assets/profile_2.jpeg';
import profilePic3 from '../../assets/profile_3.jpeg';
import profilePic4 from '../../assets/profile_4.jpeg';
import dataWarehouse from '../../assets/data_warehouse.png';
import dataModel from '../../assets/data_model.png';
import cloud from '../../assets/cloud.png';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 88vh;
  text-align: center;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 300px; // Adjust size as needed
  height: 300px; // Adjust size as needed
  object-fit: cover;
  margin-bottom: 20px;
  background: #edbdfd; 
  box-shadow: 10px 10px 20px #d1acfb, -10px -10px 20px #efe3fd;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: inset 10px 10px 15px #d1acfb, inset -10px -10px 15px #efe3fd;
  }
  `;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 0.5em;
  font-family: 'Ubuntu', sans-serif;
  font-size: 40px;
  font-weight: bold;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  font-weight: normal;
  margin-bottom: 2em;
  font-family: 'Ubuntu', sans-serif;
  font-size: 25px;
`;

const images = [profilePic1, profilePic2, profilePic3, profilePic4]; 

const AreaTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 0.5em;
  font-family: 'Ubuntu';
`;

// Additional styled components
const AreasOfInterestContainer = styled.div`
  height: 55vh;
  margin-top: 4em;
  display: flex;
  justify-content: space-around;
  align-items: start; 
  text-align: center;
  gap: 50px;
  @media (max-width: 768px) {
    flex-direction: column; // Stack them into a column on smaller screens
    align-items: center;
    gap: 20px;
  }
`;

const InterestItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
`;

const InterestIcon = styled.img`
  filter: invert(100%);
  width: 45px;
  height: 45px;
`;

const InterestTitle = styled.h3`
  font-size: 1.2em;
  margin-bottom: 0.5em;
`;

const InterestDescription = styled.p`
  font-size: 1em;
`;

// Style for the contact links
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  text-align: center;
  margin-top: -130px;
  margin-bottom: 100px;
`;

const ContactLink = styled.a`
  color: #fff380;
  text-decoration: none;
  margin: 0 5px;

  &:hover {
    text-decoration: underline; // Or any hover effect you like
  }
`;

const ContactText = styled.p`
  width: 50vw;
  margin: 20px 0;
  font-family: 'Ubuntu';
`;

const ContactTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 0.5em;
  font-family: 'Ubuntu';
`;

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex) => (currentImageIndex + 1) % images.length);
    }, 3000); // Change image every 3000 milliseconds (3 seconds)

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <HomeContainer>
      <MainContainer>
        <ProfileImage src={images[currentImageIndex]} alt="Yoonjeong Park" />
        <Title>Yoonjeong Park</Title>
        <Subtitle id="scroll-point">Business Data Analytics Student</Subtitle>
        <Typewriter
          textStyle={{
            color: 'white',
            fontFamily: 'Ubuntu',
            fontSize: '1.3em',
          }}
          multiText={[
            "I love telling stories with data!",
            "I am a Cellist, Traveler, and Climber"
          ]}
          cursor
          cursorColor="white"
          cursorStyle='_'
          multiTextDelay={5000}
          typeSpeed={70}
          loop= {true}
          deleteSpeed={50}
        />
      </MainContainer>

      {/* Area of interest */}
      <AreaTitle>Area of Interest</AreaTitle>
      <AreasOfInterestContainer id="about-section">
      <InterestItem>
        <InterestIcon src={dataWarehouse} alt="Icon description" />
        <InterestTitle>Data Warehouse</InterestTitle>
        <InterestDescription>Developing ETL processes and designing warehouse architecture to merge various data sources into a unified database.</InterestDescription>
      </InterestItem>
      <InterestItem>
        <InterestIcon src={dataModel} alt="Icon description" />
        <InterestTitle>Data Modeling</InterestTitle>
        <InterestDescription>Crafting structured frameworks that accurately represent complex data relationships, facilitating effective data analysis and decision-making processes.</InterestDescription>
      </InterestItem>
      <InterestItem>
        <InterestIcon src={cloud} alt="Icon description" />
        <InterestTitle>SQL</InterestTitle>
        <InterestDescription>Implementing and optimizing complex queries and database structures.</InterestDescription>
      </InterestItem>
    </AreasOfInterestContainer>

    {/* Contact */}
    <ContactContainer>
    <ContactTitle>CONTACT</ContactTitle>
      <ContactText>
        Feel free to contact me for any question. For open source projects, please open an issue or pull request on 
        <ContactLink href="https://github.com/denggyi" target="_blank" rel="noopener noreferrer">Github</ContactLink>.
        If you want to follow my work, reach me on 
        <ContactLink href="https://www.linkedin.com/in/yoonjeongpark/" target="_blank" rel="noopener noreferrer">LinkedIn</ContactLink>.
        Otherwise, send me an email at 
        <ContactLink href="mailto:parkyoonjeong9@gmail.com">parkyoonjeong9@gmail.com</ContactLink>.
      </ContactText>
    </ContactContainer>

  </HomeContainer>
  );
}

export default Home;
