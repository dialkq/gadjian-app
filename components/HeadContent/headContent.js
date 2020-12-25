const HeadContent = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between mx-auto bg-white mt-5 w-full border rounded-lg border-transparent md:px-4 mb-5 md:mb-0">

        <div className="flex flex-col ml-6 md:ml-0 md:my-5">
          <p className="font-bold text cyanText text-2xl md:text-sm lg:text-xl">PERSONNEL LIST</p>
          <p className="font-semibold text-base md:text-xs lg:text-base text-gray-400">List of all personnels</p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-end my-4 md:my-auto w-8/12 ml-6 md:ml-0">
          <div className="flex justify-around border border-gray-200 rounded-md md:w-36 lg:w-40 md:mr-2 lg:mr-3">
            <img className="h-4 md:h-3 lg:h-4 w-auto my-auto cursor-pointer ml-4 md:ml-2" src="/search.svg"></img>
            <input className="p-0.5 border border-transparent focus:outline-none focus:border-transparent text-bold mx-auto text-sm lg:text-base w-9/12" type="text" placeholder="Find Personnels" name="search"></input>
          </div>

          <div className="flex justify-around cyan h-8 my-1 md:my-auto border rounded-md cursor-pointer md:w-36 lg:w-40">
            <p className="font-bold md:font-medium lg:font-semibold text-white my-auto md:my-auto md:ml-2 text-xs">ADD PERSONNELS</p>
            <img className="h-4 md:h-3 lg:h-4 w-auto my-auto md:" src="/add.svg"></img>
          </div>
          
        </div>


      </div>
      <style jsx>
        {
          `
            .cyanText {
              color:  #00aaff;
            }
         
            .cyan {
              background-color: #00aaff;
            }
          `
        }

      </style>
    </>
  )
}

export default HeadContent