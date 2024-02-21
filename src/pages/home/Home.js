import React from "react";
// import loginImg from "../../assets/login.svg";
import crytoLogo from "../../assets/crypt.jpg";
import "./Home.scss";
import Loader from "../../components/loader/Loader";
import { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Layout>
          <section className="container hero">
            <div className="hero-text">
              <h2>BayzCrypt Decentralized Cryptocurrency Wallet</h2>
              <p>Safeguard your crypto with bayzCrypt today !!!</p>
              <p>
                At bayzCrypt we have make the experience more enjoyable, we have developed the 
                platform to include GIFs. This enhances the user's experience 
                and makes using the platform more fun.
              </p>

              <div className="hero-buttons --flex-start">
                <Link to='/register'><button className="--btn --btn-danger">Register</button></Link>
                <Link to='/login'><button className="--btn --btn-primary">Login</button></Link>
              </div>
            </div>
            <div className="hero-image">
              <img src={crytoLogo} alt="loginImg" />
            </div>
          </section>
        </Layout>
      )}
    </>
  );
};

export default Home;