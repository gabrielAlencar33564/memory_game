import { DivCard } from './style'

export interface ICard {
  id: string
  name: string
  flipped?: boolean
  disabled?: boolean
  click?: (id: string) => void
}

export const Card = ({
  id,
  name,
  flipped = false,
  disabled = false,
  click,
}: ICard) => {
  const functionClick = (id: string) => {
    if (click) {
      click(id)
    }
  }

  return (
    <DivCard
      disabled={disabled}
      flipped={flipped}
      name={name}
      onClick={() => functionClick(id)}
    >
      <div className="face front" />
      <div className="face back" />
    </DivCard>
  )
}
