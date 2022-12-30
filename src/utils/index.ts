import { v4 as uuidv4 } from 'uuid'
import { ICard } from '../components/Card'

export const duplicateAndSortArray = <Array>(array: Array[]): Array[] => {
  const cards = array.concat(array)
  return cards.sort(() => Math.random() - 0.5)
}

export const regenerateCard = (array: ICard[]): ICard[] => {
  return array.map((item) => ({ ...item, id: uuidv4() }))
}

export const duplicateSortRegenerateArray = (array: ICard[]): ICard[] => {
  return regenerateCard(duplicateAndSortArray(array))
}
