import React from 'react'
import styled from 'styled-components'
import { Button } from './styles/Button';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div>
          <h2>404</h2>
          <h2>Uh Oh! You're lost.</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A repudiandae voluptatem ratione iure eaque deserunt ipsa voluptatibus laboriosam veniam impedit!</p>
          <Button>
            <NavLink to="/">Go back to Home</NavLink>
          </Button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;

    h2 {
      font-size: 10rem;
    }

    h3 {
      font-size: 4.2rem;
    }

    p {
      margin: 2rem 0;
    }
  }
`;


export default ErrorPage