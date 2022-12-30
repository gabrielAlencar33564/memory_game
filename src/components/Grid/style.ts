import styled from 'styled-components'

export const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;

  @media (max-width: 450px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
  }
`
