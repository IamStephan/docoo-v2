import React from 'react'
import { styled } from '@twstyled/core'

import WindowsTitlebarControls from '@/renderer/components/windows_titlebar_controls'

const TitlebarMain = styled.div`
  -webkit-app-region: drag;

  @tailwind flex items-center justify-between border-gray-200 border-b pl-2;
`

const Titlebar = () => {
  return (
    <TitlebarMain>
      <div tw="text-sm">
        <b>Docoo </b>
      </div>
      <WindowsTitlebarControls />
    </TitlebarMain>
  )
}

/**
 * Title bar behaviour:
 * =====================
 *    - Windows
 *        Custom controls on the left side
 *        Title on the left
 *
 *    - Linux
 *        Mimic Windows
 *
 *    - MacOS
 *        Title on the right
 *        Use use native controls (on the very left of the window)
 */
export default Titlebar
