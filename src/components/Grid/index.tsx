import { Card, ICard } from '../Card'
import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMoves, setHits } from '../../store/game/gameSlice'
import { RootState } from '../../store'
import { duplicateSortRegenerateArray } from '../../utils'
import { Div } from './style'

interface GridProps {
  cards: ICard[]
}

export const Grid = ({ cards }: GridProps) => {
  const dispatch = useDispatch()
  const { valueHits } = useSelector((state: RootState) => state.game)
  const [stateCards, setStatecards] = useState<ICard[]>(() => {
    return duplicateSortRegenerateArray(cards)
  })
  const firstCard = useRef<ICard | null>(null)
  const secondCard = useRef<ICard | null>(null)
  const thirdClick = useRef<boolean>(false)

  const click = (id: string) => {
    const newStateCards = stateCards.map((card: ICard) => {
      if (card.id !== id || card.flipped) return card

      if (thirdClick.current) {
        firstCard.current!.flipped = false
        secondCard.current!.flipped = false
        firstCard.current = null
        secondCard.current = null
        thirdClick.current = false
      }

      card.flipped = true

      if (!firstCard.current) {
        firstCard.current = card
      } else if (!secondCard.current) {
        secondCard.current = card
        dispatch(setMoves())

        if (firstCard.current.name === secondCard.current.name) {
          firstCard.current.disabled = true
          secondCard.current.disabled = true
          dispatch(setHits())
          firstCard.current = null
          secondCard.current = null
        } else {
          thirdClick.current = true
        }
      }

      return card
    })

    setStatecards(newStateCards)
  }

  return (
    <Div>
      {stateCards.map((card, index) => {
        return <Card key={index} {...card} click={click} />
      })}
    </Div>
  )
}
