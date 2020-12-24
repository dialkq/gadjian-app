import MobileMenu from "./mobileMenu"

const NavbarMobile = () => {
  return (
    <>
      <div className="flex mx-auto justify-between">
        
          <div className="my-auto">
            <MobileMenu />
          </div>
          
          <div classsName="my-auto">
            <img className="h-8 w-auto my-2" src="/logo.png"></img>
          </div>

       
        <div className="my-auto ml-28">
          <img className="h-14 w-auto my-auto" src="/photo-icon.svg"></img>
        </div>
      
      </div>
    </>
  )
}

export default NavbarMobile
