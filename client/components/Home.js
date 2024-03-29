import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import anime from "animejs";
import gsap from "gsap";
import ReactCSSTransitionGroup from "react-transition-group";
/**
 * COMPONENT
 */
export const Home = ({ firstRender, setFirstRender }) => {
<<<<<<< HEAD
  useEffect(() => {
    console.log("timeline running");
    const tl1 = gsap.timeline({ delay: 0.5 });

    tl1.to(".home-text", {
      y: 20,
      visibility: "visible",
=======

  const router = useRouter()





  useEffect(() => {

    console.log('timeline running')
    const tl1 = gsap.timeline({delay: .5});


    tl1.to(".home-text", {
      y: 20,
      visibility: 'visible',
>>>>>>> 7375d9d922ed8cda1cd868487ad0197b698437c8
      autoAlpha: 1.0,
      duration: 1,
      ease: "elastic",
      stagger: 0.1,
<<<<<<< HEAD
    });
=======
    })
>>>>>>> 7375d9d922ed8cda1cd868487ad0197b698437c8

    tl1.from(
      "#paint-splatter",
      { x: 50, autoAlpha: 0, duration: 1, ease: "elastic", stagger: 0.1 },
      "-=1.5"
    );

    tl1.from(
      "#blackwhiteprof",
      { x: -50, autoAlpha: 0, duration: 1, ease: "elastic", stagger: 0.1 },
      "-=1.5"
    );
  }, []);
<<<<<<< HEAD

  return (
    <div className="home-container">
      <div className="left home-left-container">
        <div id="home-text-container">
          <div className="line-1 home-text">Hi, my name is </div>
          <div className="line-2 home-text">Pat Kenny.</div>
          <div className="line-3 home-text">Full Stack Developer</div>
          <div className="line-4 home-text">
            Chicago kid pursuing his passion for technology.
          </div>

          <div className="line-6 home-text">
            “You miss 100% of the shots you don’t take”
          </div>
          <div className="line-7 home-text">-Wayne Gretzky</div>
          <div onClick={(e) => clickHandler()} className="line-8 home-text">
            -Michael Scott
          </div>
        </div>
      </div>
      <div className="right home-right-container">
        <div className="photo-paint-container">
          <img
            className=""
            id="paint-splatter"
            alt="paint-splatter"
            height="360"
            width="360"
            src="/paint-splatter.png"
          />
          <img
            priority="true"
            className=""
            id="blackwhiteprof"
            alt="blackwhiteprof"
            height="360"
            width="280"
            src="/blackwhiteprof.png"
          />
        </div>
      </div>
    </div>
=======


  return (
    <div className="home-container">
    <div className="left home-left-container">
      <div id="home-text-container">
        <div className="line-1 home-text">Hi, my name is </div>
        <div className="line-2 home-text">Pat Kenny.</div>
        <div className="line-3 home-text">Full Stack Developer</div>
        <div className="line-4 home-text">
          Chicago kid pursuing his passion for technology.
        </div>
       
        <div className="line-6 home-text">
          “You miss 100% of the shots you don’t take”
        </div>
        <div className="line-7 home-text">-Wayne Gretzky</div>
        <div onClick={(e) => clickHandler()} className="line-8 home-text">-Michael Scott</div>
      </div>
    </div>
    <div className="right home-right-container">
      <div className='photo-paint-container'>
      <img className='' id="paint-splatter"
      alt='paint-splatter'
      height='360'  width='360' src="/paint-splatter.png" />
      <img  priority='true' className='' id="blackwhiteprof" 
      alt='blackwhiteprof'
      height='360'  width='280'
      src="/blackwhiteprof.png" />
    </div>
    </div>
  </div>
>>>>>>> 7375d9d922ed8cda1cd868487ad0197b698437c8
  );
};

/**
 * CONTAINER
 */

export default Home;
