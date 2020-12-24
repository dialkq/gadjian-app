import { useState } from 'react'

const MobileMenu = () => {
  const [click, setclick] = useState(false)

  const handleClick = () => {
    setclick(!click);
  }

  let hamburger

  if (click) {
    hamburger = <div className=""></div>
  }

  return (
    <>
      <div onClick={handleClick}>
        {
          click ?
          (<img src="/close-icon.svg" className="w-auto h-6 cursor-pointer my-auto" />) :   (<img src="/hamburger-menu.svg" className="w-auto h-8 cursor-pointer my-auto"/>)
        }
      </div>
      {hamburger}
    </>
  )
}

export default MobileMenu