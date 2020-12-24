import Link from 'next/link'

const Navbar = () => {
  return(
    <>
    <div className="mx-0 md:mx-auto lg:mx-auto my-0 md:my-8 lg:my-10 h-0 md:h-screen">

      {/* // Logo Gadjian */}
      <Link href="/">
        <div className="flex mb-12 lg:mb-13 cursor-pointer">
          <img className="h-8 md:h-10 lg:h-12 w-auto" src="/logo.png"></img>
        </div>
      </Link>

      
     {/* List Navbar */}
      <Link href="/">
        <div className="hidden md:flex lg:flex my-4 lg:my-5 cursor-pointer">
          <img className="h-3 lg:h-4 w-auto" src="/Navlist-icon/home.svg"></img>
          <p className="mx-3 font-semibold text-xs lg:text-sm">Beranda</p>
        </div>
      </Link>


      <Link href="/personnelList">
        <div className="hidden md:flex lg:flex my-4 lg:my-5 cursor-pointer">
          <img className="h-3 lg:h-4 w-auto" src="/Navlist-icon/user-group.svg"></img>
          <p className="mx-3 font-semibold text-xs lg:text-sm">Personnel List</p>
        </div>
      </Link>


      <Link href="/dailyAttendance">
        <div className="hidden md:flex lg:flex my-4 lg:my-5 cursor-pointer">
          <img className="h-3 lg:h-4 w-auto" src="/Navlist-icon/calendar-interface-symbol-tool.svg"></img>
          <p className="mx-3 font-semibold text-xs lg:text-sm">Daily Attendance</p>
        </div>
      </Link>

    </div>
      
    </>
  )
}

export default Navbar