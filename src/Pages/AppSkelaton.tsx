function AppSkeleton() {
  return (
    <div className="appSkeleton h-screen w-screen bg-teal-900 flex justify-center items-center absolute ">
      {/* <div className="w-full h-full bg-teal-600 "></div> */}
      <h1 className="text-4xl text-white">Loading...</h1>
    </div>
  );
}

export default AppSkeleton;
