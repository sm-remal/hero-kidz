// "use client"
// import React from 'react';
// import Logo from './Logo';
// import NavLink from '../button/NavLink';
// import Link from 'next/link';
// import { IoCart } from "react-icons/io5";

// const NavBar = () => {
//     const nav = <>
//         <li><NavLink href={"/"}>Home</NavLink></li>
//         <li><NavLink href={"/products"}>Products</NavLink></li>
//         <li><NavLink href={"/blogs"}>Blogs</NavLink></li>
//         <li><NavLink href={"/about"}>About Us</NavLink></li>
//         <li><NavLink href={"/contact"}>Contact Us</NavLink></li>
//     </>
//     return (
//         <div className='fixed top-0 right-0 left-0 z-50 bg-base-100'>
//             <div className="navbar max-w-[1440px] mx-auto px-5">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <div tabIndex={0} role="button" className="lg:hidden mr-2">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//                         </div>
//                         <ul
//                             tabIndex="-1"
//                             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//                             {nav}
//                         </ul>
//                     </div>
//                     <Logo></Logo>
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                         {nav}
//                     </ul>
//                 </div>
//                 <div className="navbar-end gap-3">
//                     <Link href={"/cart"} className='text-primary'>
//                         <IoCart size={30} />
//                     </Link>
//                     <Link href={"/login"} className='btn btn-sm btn-primary btn-outline'>Login</Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default NavBar;


"use client";
import React from "react";
import Logo from "./Logo";
import NavLink from "../button/NavLink";
import Link from "next/link";
import { IoCart } from "react-icons/io5";
import { useSession, signOut } from "next-auth/react";

const NavBar = () => {
  const { data: session } = useSession();

  const nav = (
    <>
      <li><NavLink href={"/"}>Home</NavLink></li>
      <li><NavLink href={"/products"}>Products</NavLink></li>
      <li><NavLink href={"/blogs"}>Blogs</NavLink></li>
      <li><NavLink href={"/about"}>About Us</NavLink></li>
      <li><NavLink href={"/contact"}>Contact Us</NavLink></li>
    </>
  );

  return (
    <div className="fixed top-0 right-0 left-0 z-50 bg-base-100">
      <div className="navbar max-w-[1440px] mx-auto px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {nav}
            </ul>
          </div>
          <Logo />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nav}</ul>
        </div>

        <div className="navbar-end gap-3">
          <Link href={"/cart"} className="text-primary">
            <IoCart size={30} />
          </Link>

          {/* --- Auth Section --- */}
          {session ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="btn btn-sm btn-primary btn-outline rounded-full flex items-center gap-2">
                {/* Show first letter of name as avatar */}
                <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {session.user?.name?.[0] || "U"}
                </span>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-2"
              >
                <li>
                  <span className="font-semibold">{session.user?.name}</span>
                </li>
                <li>
                  <span className="text-sm text-gray-500">{session.user?.email}</span>
                </li>
                <li>
                  <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="btn btn-sm btn-primary btn-outline w-full"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link href={"/login"} className="btn btn-sm btn-primary btn-outline">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
