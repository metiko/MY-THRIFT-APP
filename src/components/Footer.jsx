const Footer = () => {
    return (
      <footer className="bg-white mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-base text-gray-400">
                &copy; {new Date().getFullYear()} ThriftPlus. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  