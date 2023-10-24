import { useEffect } from 'react'

function useKeyPress(callback, keyName='Enter') {
  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === keyName) {
        callback()
      }
    }

    // Add event listener when the component mounts
    window.addEventListener('keydown', handleKeyPress)

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [callback])
}

export default useKeyPress