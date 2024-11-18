
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-gray-400 w-full  min-h-screen flex justify-center items-center'>
      <header className=" w-full  text-white ">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Welcome to My Website
          </h1>
          <p className="mt-4 text-lg sm:text-xl">
            Crafting amazing experiences with Tailwind CSS and JavaScript.
          </p>
          <div className="mt-8">
            <Link
              to={"/login"}
              className="px-6 py-3 bg-white text-blue-600 font-medium rounded-md shadow hover:bg-gray-100 transition"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Home