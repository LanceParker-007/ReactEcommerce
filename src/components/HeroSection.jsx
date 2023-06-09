import styled from 'styled-components';

const HeroSection = () => {
  return (
    <Wrapper>
        <div className="container">
            <div className="grid grid-two-column">
                <div className="hero-section-data">Welcome to </div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section``;

export default HeroSection