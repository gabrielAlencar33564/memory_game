import styled from 'styled-components'
import back from '/assets/images/back.png'

interface Props {
  flipped: boolean
  name: string
  disabled?: boolean
}

export const DivCard = styled.div<Props>`
  aspect-ratio: 3/4;
  width: 100%;
  border-radius: 5px;
  position: relative;
  transition: all 400ms ease;
  transform-style: preserve-3d;
  transform: rotateY(${(props) => props.flipped && '180deg'});

  .face {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    border: 2px solid greenyellow;
    position: absolute;
    background-size: cover;
    background-position: center;
    transition: all 400ms ease;
  }

  .front {
    transform: rotateY(180deg);
    background-image: url(${(props) => `/assets/images/${props.name}.png`});
    ${(props) => props.disabled && 'filter: saturate(0); opacity: 0.6;'}
  }

  .back {
    background-image: url(${back});
    backface-visibility: hidden;
  }

  @media (max-width: 450px) {
    aspect-ratio: 5/6;
  }
`
