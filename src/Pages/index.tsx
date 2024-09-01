
function HomePage() {
  return (
    <>
      <div className="bg-landingImage bg-cover h-[calc(100vh-81px)] flex items-center relative">
        <div className="w-full h-full absolute top-0 left-0 bg-black/30"/>
        <div className="container relative">
          <h2 className="text-6xl -mt-12 text-center text-white font-bold">
            Welcome In Souq For Shopping
          </h2>
        </div>
      </div>
      {/* <div className="w-full h-[1200px] border-red-500 border-4 relative">
        <div className="w-8 h-8 bg-green-400 sticky top-2/4 left-4">O</div>
      </div>{" "}
      <div className="w-full h-[1200px] border-red-500 border-4 relative">
        <div className="w-8 h-8 bg-green-400 sticky top-2/4 left-4">X</div>
      </div> */}
    </>
  );
}

export default HomePage