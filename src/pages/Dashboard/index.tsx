import { Grid } from '../../components/Grid'
import { cards } from '../../data/cards'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import { MainDashboard } from './style'

export const Dashboard = () => {
  const { valueMoves, playName } = useSelector((state: RootState) => state.game)

  return (
    <>
      <MainDashboard>
        <header>
          <span>NAME: {playName}</span>
          <div>
            <span>MOVES: {valueMoves}</span>
          </div>
        </header>
        <Grid cards={cards} />
      </MainDashboard>
    </>
  )
}
