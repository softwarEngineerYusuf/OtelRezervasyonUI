// import React, { useState } from "react";
// import "./navbar.css";
// import { MdOutlineTravelExplore } from "react-icons/md";
// import { AiFillCloseCircle } from "react-icons/ai";
// import { TbGridDots } from "react-icons/tb";
// import { Link } from "react-router-dom";
// const Navbar = () => {
//   const [active, setActive] = useState("navBar");
//   const showNav = () => {
//     setActive("navBar activeNavbar");
//   };

//   const removeNavbar = () => {
//     setActive("navBar");
//   };
//   return (
//     <section className="navBarSection">
//       <header className="header flex">
//         <div className="logoDiv">
//           <a href="#" className="logo flex">
//             <h1>
//               <MdOutlineTravelExplore className="icon" />
//               Travel.
//             </h1>
//           </a>
//         </div>

//         <div className={active}>
//           <ul className="navLists flex">
//             <li className="navItem">
//               <Link to="/" className="navLink">
//                 Anasayfa
//               </Link>
//             </li>
//             <li className="navItem">
//               <a href="#" className="navLink">
//                 Packages
//               </a>
//             </li>
//             <li className="navItem">
//               <a href="#" className="navLink">
//                 Shop
//               </a>
//             </li>
//             <li className="navItem">
//               <a href="#" className="navLink">
//                 About
//               </a>
//             </li>
//             <li className="navItem">
//               <a href="#" className="navLink">
//                 Pages
//               </a>
//             </li>
//             <link rel="stylesheet" href="" />
//             <button className="btn">
//               <Link to="/Register">Kayıt Ol</Link>
//             </button>
//             <link rel="stylesheet" href="" />
//             <button className="btn">
//               <Link to="/Login">Giriş Yap</Link>
//             </button>
//           </ul>

//           <div onClick={removeNavbar} className="closeNavbar">
//             <AiFillCloseCircle className="icon" />
//           </div>
//         </div>

//         <div onClick={showNav} className="toggleNavbar">
//           <TbGridDots className="icon" />
//         </div>
//       </header>
//     </section>
//   );
// };

// export default Navbar;
