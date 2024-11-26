import React from 'react'
import styled from 'styled-components'

const Homepage = () => {
  return (
    <div>
      <Title>Hello World</Title>
    </div>
  )
}

export default Homepage


const Title = styled.h3`
    font-size: 1.5em;
    text-align: center;
    color: red;
`;