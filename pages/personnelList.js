import HelloCard from "../components/Card/helloCard"
import Navbar from "../components/Navbar/navbar"
import NavbarMobile from "../components/Navbar/navbarMobile"

const PersonnelList = () => {
  return (
    <>
      <div className="flex">
        <div className="hidden md:flex md:flex-col my-0 md:my-8 lg:my-10 w-0 md:w-4/12 lg:w-3/12">
          <Navbar  />
        </div>

        <div className="w-11/12 md:hidden mx-auto">
          <NavbarMobile />
        </div>

        <div className="hidden md:flex my-0 md:my-6 lg:my-8 w-0 md:w-7/12 lg:w-8/12 h-16">
          <HelloCard />
        </div>

      </div>
      
    </>
  )
}

export default PersonnelList