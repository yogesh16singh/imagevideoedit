import Logo from "../assets/Logo.png";
const Navbar = ({ active, setActive }) => {
  return (
    <header className="bg-white w-full drop-shadow-md flex justify-between items-center h-20  mx-auto px-4 text-black">
      <img className="w-32" src={Logo}></img>
      <div className="flex md:mx-20 bg-slate-300 rounded-lg">
        <button
          onClick={() => setActive("image")}
          className={`m-2 px-4 py-1 text-xl hover:bg-blue-800 hover:text-white rounded-lg ${active == "image" ? "border-2 border-blue-600" : ""}`}
        >
          Image
        </button>
        <button
          onClick={() => setActive("video")}
          className={`m-2 px-4 py-1 text-xl hover:bg-blue-800 hover:text-white rounded-lg ${active == "video" ? "border-2 border-blue-600" : ""}`}
        >
          Video
        </button>
      </div>
    </header>
  );
};
export default Navbar;
