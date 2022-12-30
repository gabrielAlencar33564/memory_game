import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginStyle } from './style'
import { useDispatch } from 'react-redux'
import { setPlayName } from '../../store/game/gameSlice'
import brain from '/assets/images/brain.png'

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState<string>('')

  const submit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    dispatch(setPlayName(name))
    navigate('/dashboard')
  }

  return (
    <LoginStyle>
      <form onSubmit={submit}>
        <div>
          <img src={brain} alt="brain icon" />
          <h1>Memory Game</h1>
        </div>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setName(event.target.value)
          }
        />
        <button disabled={name.length >= 3 ? false : true} type="submit">
          Play
        </button>
      </form>
    </LoginStyle>
  )
}
