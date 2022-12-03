import React from "react";
import './Banner.css';

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/person.png" alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Muhammad Bilal</h6>
            <h3>Content Writer/Programmer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              magni possimus in architecto repellat perspiciatis cum recusandae
              adipisci culpa voluptatem dolorem laudantium temporibus quos
              laborum, beatae sint delectus expedita quo.
            </p>
            <a className="btn" href="#projects">
              My Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;