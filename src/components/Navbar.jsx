import { Link, useNavigate } from "react-router-dom";
import { motion, scale } from "motion/react";

const nav_sytle_variants = {
  initial_100vw: {
    x: "-100vw",
  },

  default_pos: {
    x: 0,
    y: 0,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
  from_bottom_left_to_top: {
    x: "-100vw",
    y: "550px",
  },
};

const Navbar = () => {
  return (
    <header>
      <nav
        className="h-16 px-8 lg:h-20 st:px-10 sm:px-9 md:px-16 lg:px-14  xl:px-26 
       bg-light py-9 flex  items-center justify-between shadow-sm"
      >
        <motion.div
          className="logo nav_left cursor-pointer "
          variants={nav_sytle_variants}
          initial="initial_100vw"
          animate={{ x: 0 }}
        >
          <Link to={"/"}>
            <h1
              className="text-xl st:text-3xl sm:text-2xl lg:text-3xl  underline-offset-4
              italic font-semibold
               hover:scale-105  text-indigo-600 md:underline sm:underline-offset-8  "
            >
              Ms Tech Hive
            </h1>
          </Link>
        </motion.div>

        {/* normal button only visible until md */}

        <div className="nav_right hidden md:block lg:hidden ">
          <a href="#login" className="">
            <motion.button className="px-8 py-2 text-primary text-lg rounded-xl  bg-blue cursor-pointer ">
              Login
            </motion.button>
          </a>
        </div>

        {/* animated button visible for lg */}

        <div className="nav_right hidden md:hidden  lg:block ">
          <a href="#login" className="">
            <motion.button
              initial={{ x: "-100vw", y: 650 }}
              animate={{ x: 0, y: 0 }}
              transition={{ duration: 4, type: "spring" }}
              className="px-8 py-2 xl:text-2xl  text-primary text-lg rounded-xl  bg-blue cursor-pointer "
            >
              Login
            </motion.button>
          </a>
        </div>
      </nav>
      <hr />
    </header>
  );
};

export default Navbar;
