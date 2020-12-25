const HelloCard = () => {
  return (
    <>
      <div className="hidden md:flex justify-end w-full h-auto my-auto cyan">
        <p className="my-auto mx-1 font-bold">Hallo,</p>
        <p className="my-auto mr-4 font-bold cyanText">Gadjian User</p>
        <div className="my-auto">
          <img className="h-0 md:h-14 lg:h-16 w-auto" src="/photo-icon.svg"></img>
        </div>
      </div>
      
      {/* styling warna text cyan */}
      <style jsx>
        {
          `
            .cyanText {
              color:  #00aaff;
            }
          `
        }

      </style>
    </>
  )
}

export default HelloCard