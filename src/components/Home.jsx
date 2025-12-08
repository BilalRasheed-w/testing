import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import SignUp from "./SignUp";
import LoginForm from "./LoginForm";

const Home = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUp(true);
    console.log("signup");
  };

  const handleLoginClick = () => {
    setShowSignUp(false);
  };

  return (
    <>
      <div
        className=" pb-10 md:pb-0  
        md:bg-[linear-gradient(-197deg,white_60%,rgba(37,99,235,0.9)_50%)]
        2xl:bg-[linear-gradient(-194deg,white_60%,rgba(37,99,235,0.9)_50%)]  "
      >
        <Navbar />
        <Hero />
      </div>
      <Features />
      {showSignUp ? (
        <SignUp handleLoginClick={handleLoginClick} />
      ) : (
        <LoginForm onSignUpClick={handleSignUpClick} />
      )}
    </>
  );
};

export default Home;
