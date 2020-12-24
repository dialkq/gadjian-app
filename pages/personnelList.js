import Navbar from "../components/Navbar/navbar"
import NavbarMobile from "../components/Navbar/navbarMobile"

const PersonnelList = () => {
  return (
    <>
      <div className="">
        <div className="hidden md:flex md:flex-col w-0 md:w-4/12 lg:w-3/12">
          <Navbar  />
        </div>

        <div className="w-11/12 md:hidden mx-auto">
          <NavbarMobile />
        </div>

      </div>
      
    </>
  )
}

export default PersonnelList