import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <nav className="bg-blue-500 p-4">
         <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-2xl font-bold">
               <Link to="">Logo</Link>
            </div>

            <div
               className={`w-[50%] md:flex md:items-center md:w-auto md:static absolute right-0 top-[65px]  md:bg-transparent p-10 md:p-0 z-10 rounded-lg bg-blue-400/60 ${
                  isOpen ? "block" : "hidden"
               }`}
            >
               <div className="text-white md:flex md:space-x-6">
                  <Link
                     to=""
                     className="block py-2 md:py-0"
                  >
                     Home
                  </Link>
                  <Link
                     to=""
                     className="block py-2 md:py-0"
                  >
                     About
                  </Link>
                  <Link
                     to=""
                     className="block py-2 md:py-0"
                  >
                     Contact
                  </Link>
               </div>
            </div>
            <div className="md:hidden">
               <button
                  className="text-white"
                  onClick={() => setIsOpen(!isOpen)}
               >
                  <svg
                     className="w-6 h-6"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                     />
                  </svg>
               </button>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
