import React from 'react'
import { styled } from '@twstyled/core'

import Titlebar from '../titlebar'
import Sidebar from '../sidebar'
import Contextbar from '../contextbar'
import Pages from '../pages'

const Corelayout = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-template-rows: auto 1fr;
`

const App: React.FC = () => {
  return (
    <Corelayout tw="h-screen w-screen overflow-hidden">
      {/* Titlebar */}
      <div tw="col-start-2 col-end-4 row-start-1 row-end-2">
        <Titlebar />
      </div>

      {/* Sidebar */}
      <div tw="col-start-1 col-end-2 row-start-1 row-end-3">
        <Sidebar />
      </div>

      {/* Contextbar */}
      <div tw="col-start-2 col-end-3 row-start-2 row-end-3">
        <Contextbar />
      </div>

      {/* Pages */}
      <div tw="col-start-3 col-end-4 row-start-2 row-end-3">
        <Pages />
      </div>
    </Corelayout>
  )
}

export default App
