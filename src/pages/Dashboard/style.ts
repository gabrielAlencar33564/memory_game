import styled from 'styled-components'

export const MainDashboard = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  background-image: url('/assets/images/background.jpg');
  background-position: center;
  background-size: cover;
  align-items: center;
  justify-content: center;
  gap: 15px;

  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 50rem;
    background-color: rgba(0, 210, 0, 0.6);
    padding: 20px;
    border-radius: 5px;
  }
`
