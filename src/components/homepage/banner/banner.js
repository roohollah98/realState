import React, { useEffect } from "react";
import "./banner.css";

import ScrollReveal from "scrollreveal";

const Banner = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "left",
      distance: "60px",
      duration: 2500,
      delay: 400,
      reset: true,
    });
    sr.reveal(`.bannerContent h1`);
    sr.reveal(`.bannerContent .btn`);

  }, []);
  return (
    <section className="bannerContainer">
      <div className="bannerContent">
        <h1>Find your dream home with us</h1>
        <button className="btn">Lets Go</button>
      </div>
    </section>
  );
};

export default Banner;
