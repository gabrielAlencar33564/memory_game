import styled from 'styled-components'

export const LoginStyle = styled.main`
  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;

    div {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 50px;

      img {
        width: 100px;
      }

      h1 {
        font-size: 1.5rem;
      }
    }

    input {
      border: 2px solid black;
      border-radius: 5px;
      font-size: 1rem;
      margin-bottom: 10px;
      max-width: 18.75rem;
      outline: none;
      padding: 10px;
      width: 100%;
    }

    button {
      background-color: red;
      color: #ffffff;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
      padding: 10px;
      max-width: 18.75rem;
      width: 100%;
    }

    button:disabled {
      background-color: #eee;
      color: #aaa;
      cursor: auto;
    }
  }
`
