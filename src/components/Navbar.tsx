const Navbar = () => {
  return (
    <div className="flex min-w-min bg-gray-300 h-20">
      <div>
        <p className="mt-2 ml-2 mb-auto p-5 border border-red-600">Logo</p>
      </div>
      <div className="m-auto flex-inline">
        <h1 className="text-center">WEBSITE NAME</h1>
      </div>
      <div className="flex flex-row mr-2 mt-2 mb-auto p-5 ">
        <p className="mr-2 border border-red-600">Home</p>
        <p className="mr-2 border border-red-600">Sign up</p>
        <p className="mr-2 border border-red-600">Log in</p>
      </div>
    </div>
  );
};

export default Navbar;
