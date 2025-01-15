
export default function Navbar() {
  return (
    <div className="flex justify-between px-8 py-4 items-center border border-b-gray-300  font-geist ">
      <a href="/" className="text-gray900 font-bold text-xl">SuperMetrics.com</a>

      <div className="flex gap-4 font-medium ">
        <button className="text-gray700 p-1 px-2 hover:bg-gray-50 rounded-lg">Features</button>
        <button className="text-gray700 p-1 px-2 hover:bg-gray-50 rounded-lg">Resources</button>
        <button className="text-gray700 p-1 px-2 hover:bg-gray-50 rounded-lg">Company</button>
        <button className="text-gray700 p-1 px-2 hover:bg-gray-50 rounded-lg">Pricing</button>
      </div>

      <div className="flex gap-4">
        <button className="text-gray-800 font-semibold p-1 px-2 hover:bg-gray-50 rounded-lg">Login</button>
        <button className="text-white font-medium bg-blue500 p-2 px-3 rounded-lg shadow-blue100">Sign up</button>
      </div>

    </div>
  )
}


