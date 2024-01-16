import React, { Suspense, lazy } from 'react'
import Menu from '../components/Menu'

const Searches = lazy(async () => await import('../components/Searches'))
const Recommended = lazy(async () => await import('../components/Recommended'))
const Gallery = lazy(async () => await import('../components/Gallery'))

const MainPage: React.FC = () => {
  return (
    <>
      <Menu />
      <Searches />
      <Suspense fallback={<div>Loading Recommended...</div>}>
        <Recommended />
      </Suspense>
      <Suspense fallback={<div>Loading Gallery...</div>}>
        <Gallery />
      </Suspense>
    </>
  )
}

export default MainPage
