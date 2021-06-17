import React, { useEffect, useState } from 'react'
import { styled } from '@twstyled/core'

import remote from '@/renderer/utils/remote_window'

import MinimizeIcon from '@/renderer/assets/svg/windows_minimize_icon.svg'
import UnmaximizeIcon from '@/renderer/assets/svg/windows_unmaximize_icon.svg'
import MaximizeIcon from '@/renderer/assets/svg/windows_maximize_icon.svg'
import CloseIcon from '@/renderer/assets/svg/windows_close_icon.svg'

const ControlsContainer = styled.div`
  -webkit-app-region: none;
`

const ControlButton = styled.div`
  height: 32px;
  width: 46px;
  @tailwind cursor-pointer hover:bg-gray-100 flex justify-center items-center text-gray-800;
`

function closeWindow() {
  remote.window.close()
}

function toggleMaximizeWindow() {
  const isMaximized = remote.window.isMaximized()

  isMaximized ? remote.window.unmaximize() : remote.window.maximize()
}

function minimizeWindow() {
  remote.window.minimize()
}

const WindowsTitlebarControls = () => {
  const [isMaximized, setIsMaximized] = useState(() =>
    remote.window.isMaximized()
  )

  useEffect(() => {
    const goingMax = () => setIsMaximized(true)
    const goingUnmax = () => setIsMaximized(false)

    remote.window.addListener('maximize', goingMax)
    remote.window.addListener('unmaximize', goingUnmax)

    return () => {
      remote.window.removeListener('maximize', goingMax)
      remote.window.removeListener('unmaximize', goingUnmax)
    }
  }, [])

  return (
    <ControlsContainer tw="flex">
      <ControlButton onClick={minimizeWindow}>
        <MinimizeIcon />
      </ControlButton>

      <ControlButton onClick={toggleMaximizeWindow}>
        {isMaximized ? <UnmaximizeIcon /> : <MaximizeIcon />}
      </ControlButton>

      <ControlButton
        onClick={closeWindow}
        tw="hover:bg-red-500 hover:text-white"
      >
        <CloseIcon />
      </ControlButton>
    </ControlsContainer>
  )
}

export default WindowsTitlebarControls
