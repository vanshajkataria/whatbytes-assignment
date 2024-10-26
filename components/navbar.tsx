export default function Navbar() {
  return (
    <>
      <nav className="w-full h-full flex flex-col gap-8 py-8 border-r pr-2 lg:pr-4">
        <div className="flex items-center gap-6 py-4 rounded-r-full px-3 lg:px-6">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className="fill-gray-700"
            >
              <path d="M160-160v-320h160v320H160Zm240 0v-640h160v640H400Zm240 0v-440h160v440H640Z" />
            </svg>
          </span>
          <p className="text-gray-700 font-extrabold hidden lg:block">Dashboard</p>
        </div>
        <div className="flex items-center gap-6 bg-gray-100 py-4 rounded-r-full px-3 lg:px-6">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className="fill-blue-700"
            >
              <path d="M240-40v-329L110-580l185-300h370l185 300-130 211v329l-240-80-240 80Zm80-111 160-53 160 53v-129H320v129Zm20-649L204-580l136 220h280l136-220-136-220H340Zm98 383L296-558l57-57 85 85 169-170 57 56-226 227ZM320-280h320-320Z" />
            </svg>
          </span>
          <p className="text-blue-700 font-extrabold hidden lg:block">Skill Test</p>
        </div>
        <div className="flex items-center gap-6 py-4 rounded-r-full px-3 lg:px-6">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className="fill-gray-700"
            >
              <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
            </svg>
          </span>
          <p className="text-gray-700 font-extrabold hidden lg:block">Internship</p>
        </div>
      </nav>
    </>
  );
}
