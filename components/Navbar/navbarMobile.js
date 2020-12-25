import MobileMenu from "./mobileMenu"

const NavbarMobile = () => {
  return (
    <>
      <div className="flex mx-auto my-auto py-2 justify-between">
        
          <div className="my-auto">
            <MobileMenu />
          </div>
          
          <div classsName="my-auto">
            <img className="h-8 w-auto my-3 ml-3" src="/logo.png"></img>
          </div>

       
        <div className="my-auto ml-28">
          <img className="h-16 w-auto my-auto" src="/photo-icon.svg"></img>
        </div>
      
      </div>
    </>
  )
}

export default NavbarMobile
