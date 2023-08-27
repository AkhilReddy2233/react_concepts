import React from 'react'
import { createPortal } from 'react-dom'

function PortalRoot() {
  return createPortal(
    <div>
      <h2>Portal Rooot</h2>
    </div>,
    document.getElementById('portal-root')
  )
}

export default PortalRoot
