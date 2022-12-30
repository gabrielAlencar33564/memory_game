import { Routes, Route, Navigate } from 'react-router-dom'
import { Login } from '../pages/Login/ index'
import { Dashboard } from '../pages/Dashboard/index'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

export const RoutesPage = () => {
  const playName = useSelector((state: RootState) => state.game.playName)

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={!!playName ? <Dashboard /> : <Navigate replace to="/login" />}
      />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  )
}
