import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PortfolioLayout } from '../portfolio/layout/PortfolioLayout'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/*' element={ <PortfolioLayout /> } />
    </Routes>
  )
}
