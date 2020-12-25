import CardProfile from "../components/Card/cardProfile"
import HelloCard from "../components/Card/helloCard"
import HeadContent from "../components/HeadContent/headContent"
import Navbar from "../components/Navbar/navbar"
import NavbarMobile from "../components/Navbar/navbarMobile"

const PersonnelList = () => {
  return (
    <>
      <div className="flex md:p-5">
        <div className="hidden md:flex md:flex-col my-0 md:my-8 lg:my-10 w-0 md:w-3/12">
          <Navbar  />
        </div>

        <div className="w-11/12 flex md:hidden mx-auto">
          <NavbarMobile />
        </div>

        <div className="hidden md:flex md:flex-col mx-auto my-0 md:my-6 lg:my-8 w-0 md:w-full h-16">
          <HelloCard />
          <div className="bg-gray-100 mt-5 md:px-3">
            <HeadContent />
          </div>

          <div className="bg-gray-100 md:px-3">
            <CardProfile />
          </div>

        </div>
      </div>

      {/* Content Mobile Version */}
      <div className="flex flex-col md:hidden bg-gray-100 px-4">
        <HeadContent />
      </div>
      <div className="flex flex-col md:hidden bg-gray-100 px-4">
        <CardProfile />
        <CardProfile />
        <CardProfile />
        <CardProfile />
      </div>

    </>
  )
}

export default PersonnelList