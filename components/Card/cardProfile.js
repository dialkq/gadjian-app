const CardProfile = () => {
  return (
    <>
      <div className="flex flex-col my-2 bg-white border border-transparent rounded-lg w-full mx-auto">
        
        <div className="flex justify-between my-auto py-1 borderBottom">
          <div className="flex">
            <p className="text-gray-400 font-semibold text-sm ml-5 my-auto">Personnel ID: </p>
            <p className="cyan ml-2 text-base font-semibold my-auto">123124</p>
          </div>
          <img className="h-6 w-auto mr-5 cursor-pointer" src="/dot.svg"></img>
        </div>

        {/* container photo and profile */}
        <div className="flex md:flex-col justify-around my-2 md:my-0">
            <div className="w-3/4 md:w-full my-auto md:mx-auto">
              <img className="h-28 md:h-32 -auto my-auto mx-auto" src="/photo-icon.svg" alt="Photo"></img>
            </div>

            <div className="flex flex-col w-full mt-4 md:mt-0">
              <div className="my-0.5 md:px-5">
                <p className="text-xs text-gray-700 font-bold -mb-0.5">Name</p>
                <p className="text-sm text-gray-400 font-semibold">First Name last Name </p>
              </div>

              <div className="my-0.5 md:px-5">
                <p className="text-xs text-gray-700 font-bold -mb-0.5">Telephone</p>
                <p className="text-sm text-gray-400 font-semibold">Phone Number</p>
              </div>

              <div className="my-0.5 md:px-5 hidden md:flex flex-col">
                <p className="text-xs text-gray-700 font-bold -mb-0.5">Birthday</p>
                <p className="text-sm text-gray-400 font-semibold">22-22-22</p>
              </div>

              <div className="my-0.5 md:px-5 hidden md:flex flex-col">
                <p className="text-xs text-gray-700 font-bold -mb-0.5">Email</p>
                <p className="text-sm text-gray-400 font-semibold">qdwqd@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      
      <style jsx>
        {
          `
            .borderBottom {
              border-bottom:  3px solid #F3F4F6;
            }

            .cyan {
              color: #00aaff;
            }
          `
        }
      </style>
    </>
  )
}

export default CardProfile