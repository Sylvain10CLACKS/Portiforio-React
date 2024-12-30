


// import { Link } from "react-scroll";

// const NavBar = () => {
//   return (
//     <nav className="bg-blue-100 flex justify-between px-4 h-[5rem] items-center fixed w-full">
//       <div>
//         <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent sm:from-gray-500 sm:to-purple-500">
//           Ntirenganya Sylvain
//         </h1>
//       </div>

//       <ul className="flex justify-end space-x-6 sm:space-x-4">
//         <li className="hover:bg-blue-300 rounded-sm cursor-pointer focus: text-purple-900">
//           <Link to="home" smooth={true} duration={500} aria-label="Navigate to Home section" >
//             Home
//           </Link>
//         </li>
//         <li className="hover:bg-blue-300 rounded-sm cursor-pointer focus: text-purple-900">
//           <Link to="skills" smooth={true} duration={500} aria-label="Navigate to Skills section">
//             Skills
//           </Link>
//         </li>
//         <li className="hover:bg-blue-300 rounded-sm cursor-pointer focus: text-purple-900">
//           <Link to="about" smooth={true} duration={500} aria-label="Navigate to About section">
//             About
//           </Link>
//         </li>
//         <li className="hover:bg-blue-300 rounded-sm cursor-pointer focus: text-purple-900">
//           <Link to="hero" smooth={true} duration={500} aria-label="Navigate to Hero section">
//             Hero
//           </Link>
//         </li>
//         <li className="hover:bg-blue-300 rounded-sm cursor-pointer focus: text-purple-900"> 
//           <Link to="contact" smooth={true} duration={500} aria-label="Navigate to Contact section">
//             Contact
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;



import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="bg-blue-100 flex justify-between items-center px-6 py-4 fixed w-full top-0 shadow-md z-50">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent sm:from-gray-500 sm:to-purple-500">
          Ntirenganya Sylvain
        </h1>
      </div>

      <ul className="flex justify-end space-x-8 sm:space-x-6">
        <li className="group">
          <Link
            to="home"
            smooth={true}
            duration={500}
            aria-label="Navigate to Home section"
            className="text-xl font-semibold text-gray-800 hover:text-white focus:text-purple-900 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out group-hover:bg-blue-500"
          >
            Home
          </Link>
        </li>
        <li className="group">
          <Link
            to="skills"
            smooth={true}
            duration={500}
            aria-label="Navigate to Skills section"
            className="text-xl font-semibold text-gray-800 hover:text-white focus:text-purple-900 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out group-hover:bg-blue-500"
          >
            Skills
          </Link>
        </li>
        <li className="group">
          <Link
            to="about"
            smooth={true}
            duration={500}
            aria-label="Navigate to About section"
            className="text-xl font-semibold text-gray-800 hover:text-white focus:text-purple-900 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out group-hover:bg-blue-500"
          >
            About
          </Link>
        </li>
        <li className="group">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            aria-label="Navigate to Hero section"
            className="text-xl font-semibold text-gray-800 hover:text-white focus:text-purple-900 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out group-hover:bg-blue-500"
          >
            Hero
          </Link>
        </li>
        <li className="group">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            aria-label="Navigate to Contact section"
            className="text-xl font-semibold text-gray-800 hover:text-white focus:text-purple-900 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out group-hover:bg-blue-500"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

