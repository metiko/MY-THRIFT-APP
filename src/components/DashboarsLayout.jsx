import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-indigo-50">
      <h1 className="text-9xl font-extrabold text-indigo-600 tracking-widest">404</h1>
      <div className="bg-indigo-600 px-2 text-sm rounded rotate-12 absolute text-white">Page Not Found</div>
      <div className="mt-5">
        <Link
          to="/"
          className="relative inline-block text-sm font-medium text-indigo-600 group active:text-indigo-500 focus:outline-none focus:ring"
        >
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-indigo-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="relative block px-8 py-3 bg-white border border-current">Go Home</span>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
