import React from 'react';
import { Link } from 'react-router-dom';
class Navbar extends React.Component {
    render() {
        return <div>
<nav className="flex justify-between px-20 py-10 items-center bg-white ">
  <h1 className="text-xl text-gray-800 font-bold">JBI</h1>
  <div className="flex items-center">
    <ul className="flex items-center space-x-6">
      <Link to="/JBI-News-App/"><li className="font-semibold text-gray-700 hover:text-green-500">Home</li></Link>
      <Link to="/business"><li className="font-semibold text-gray-700 hover:text-green-500">Business</li></Link>
      <Link to="/entertainment"><li className="font-semibold text-gray-700 hover:text-green-500">Entertainment</li></Link>
      <Link to="/health"><li className="font-semibold text-gray-700 hover:text-green-500">Health</li></Link>
      <Link to="/science"><li className="font-semibold text-gray-700 hover:text-green-500">Science</li></Link>
      <Link to="/sports"><li className="font-semibold text-gray-700 hover:text-green-500">Sports</li></Link>
      <Link to="/technology"><li className="font-semibold text-gray-700 hover:text-green-500">Technology</li></Link>
    </ul>
  </div>
</nav>
            </div>;
    }
}

export default Navbar;