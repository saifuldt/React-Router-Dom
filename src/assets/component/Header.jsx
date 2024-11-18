import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div className="flex justify-between items-center fixed  top-0  bg-slate-500 w-full h-20 px-10 text-orange-300">
      <Link  className="font-extrabold text-xl hover:text-orange-400" to={"/"}>Logo</Link>
      <div className="flex gap-20">
        <div className="flex gap-4">
          <Link className="hover:text-orange-400" to={"/"}>Home</Link>
          <Link className="hover:text-orange-400" to={"/about"}>About</Link>
          <Link className="hover:text-orange-400" to={"/contact"}>Contact</Link>
        </div>
        <div className="flex gap-4 bg-orange-300 text-gray-500 p-2 rounded-md">
          <Link className="border-r-2 border-gray-500 pr-2 hover:text-white" to={"/login"}>Login </Link>
          <Link className="hover:text-white" to={"/sign-up"}>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Header