import { Link, NavLink } from 'react-router-dom'

const InAppHeader = () => {
  return (
    <header className='w-full sticky top-0 border-b bg-white z-50'>
        <nav className="container px-4 lg:px-0 mx-auto flex justify-between items-center">
            <h1 className='text-3xl font-bold text-white sm:text-black'>BUY RMB</h1>
            <div className='flex gap-8 h-full items-center'>
                <NavLink to={"dashboard"} className={`inline-block py-10 text-gray-500 hover:text-[#FFDD66]`}>Dashboard</NavLink>
                <NavLink to={"orders"} className='inline-block py-10 text-gray-500 hover:text-[#FFDD66]'>Orders</NavLink>
                <NavLink to={"account"} className='inline-block py-10 text-gray-500 hover:text-[#FFDD66]'>Account</NavLink>
            </div>
            <div className='flex gap-4 lg:gap-4'>
                <Link className='py-2 px-4 lg:px-6 rounded-full text-md font-medium text-white bg-black' to={"/"}>Buy</Link>
                <Link className='py-2 px-4 lg:px-6 rounded-full text-md font-medium' to={"/"}>Logout</Link>
            </div>
        </nav>
    </header>
  )
}

export default InAppHeader
