import HelloCard from "../components/Card/helloCard"
import HeadContent from "../components/HeadContent/headContent"
import Navbar from "../components/Navbar/navbar"
import NavbarMobile from "../components/Navbar/navbarMobile"

const PersonnelList = () => {
  return (
    <>
      <div className="flex">
        <div className="hidden md:flex md:flex-col my-0 md:my-8 lg:my-10 w-0 md:w-2/12 mx-auto">
          <Navbar  />
        </div>

        <div className="w-11/12 md:hidden mx-auto">
          <NavbarMobile />
        </div>

        <div className="hidden md:flex md:flex-col mx-auto my-0 md:my-6 lg:my-8 w-0 md:w-9/12 h-16">
          <HelloCard />
          <div className="bg-gray-50 mt-5">
            <HeadContent />
          </div>
          
        </div>
      </div>

      {/* Head Content Mobile Version */}
      <div className="flex md:hidden bg-gray-50 mt-3">
        <HeadContent />
      </div>

    </>
  )
}

export default PersonnelList