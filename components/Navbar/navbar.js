import Link from 'next/link'
import NavbarMobile from './navbarMobile'

const Navbar = () => {
  return(
    <>
    <div className="mx-2 md:mx-auto lg:mx-auto my-0 md:my-8 lg:my-10">
 
      {/* // Logo Gadjian */}
      <Link href="/">
        <div className="flex mb-12 lg:mb-13.5 cursor-pointer">
          <img className="h-8 md:h-10 lg:h-12 w-auto" src="/logo.png"></img>
        </div>
      </Link>

      
     {/* List Navbar */}
      <Link href="/">
        <div className="hidden md:flex lg:flex my-4 lg:my-5 cursor-pointer">
          <img className="h-3.5 lg:h-5 w-auto" src="/Navlist-icon/home.svg"></img>
          <p className="mx-3 font-semibold text-xs lg:text-base">Beranda</p>
        </div>
      </Link>


      <Link href="/personnelList">
        <div className="hidden md:flex lg:flex my-4 lg:my-5 cursor-pointer">
          <img className="h-3.5 lg:h-5 w-auto" src="/Navlist-icon/user-group.svg"></img>
          <p className="mx-3 font-semibold text-xs lg:text-base">Personnel List</p>
        </div>
      </Link>


      <Link href="/dailyAttendance">
        <div className="hidden md:flex lg:flex my-4 lg:my-5 cursor-pointer">
          <img className="h-3.5 lg:h-5 w-auto" src="/Navlist-icon/calendar-interface-symbol-tool.svg"></img>
          <p className="mx-3 font-semibold text-xs lg:text-base">Daily Attendance</p>
        </div>
      </Link>

    </div>
      
    </>
  )
}

export default Navbar