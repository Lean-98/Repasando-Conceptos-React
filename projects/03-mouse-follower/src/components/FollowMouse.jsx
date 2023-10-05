import React, { useEffect, useState } from 'react'

export const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // Pointer move
  useEffect(() => {
    console.log('Efecto', { enabled })
    const handleMove = (e) => {
      const { clientX, clientY } = e
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // Cleanup:
    // -> cuando el componente se desmonta
    // -> cuando cambian las dependencias, antes de ejecutar el efecto de nuevo
    // -> Esto lo ejecuta antes que se desmonte el componente y antes de volver a ejecutar el efecto
    return () => { // cleanup method
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  // Change body class
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  // [] -> solo se ejecuta una vez cuando se monta el componente
  // [enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined -> se ejecuta cada vez que se renderiza el componente

  return (
    <>
      <main>
        <div
          style={{
            position: 'absolute',
            backgroundColor: 'rgba(0, 0 , 0, 0.5)',
            border: '1px solid #fff',
            borderRadius: '50%',
            opacity: 0.8,
            pointerEvents: 'none',
            left: -20,
            top: -20,
            width: 40,
            height: 40,
            transform: `translate(${position.x}px, ${position.y}px)`
          }}
        />
        <button onClick={() => setEnabled(!enabled)}>
          {enabled ? 'Desactivate:' : 'Activate:'} Follow pointer
        </button>
      </main>
    </>
  )
}
