"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BubbleSpread: React.FC = () => {
  useEffect(() => {
    const circleExpand = () => {
      const ce = gsap.timeline({
        scrollTrigger: {
          markers: false,
          trigger: ".circle-anim",
          scrub: 0.1,
          start: "top 75%",
        },
      });
      ce.from(".outline-anim", {
        opacity: 0,
        onComplete: function () {
          document.querySelector(".outline-anim")?.classList.add("active");
        },
      })
        .from(
          ".circle-anim",
          {
            opacity: 0,
          },
          "+=0.5"
        )
        .from(".circle-block", {
          width: "160px",
          height: "160px",
          top: "0px",
          left: "0px",
          opacity: 0,
          stagger: { amount: 1 },
        });
    };

    circleExpand();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.globalTimeline.clear();
    };
  }, []);

  return (
    <section className="bubble-section">
      <div className="content color-blue">
        <div className="color-blue text-subtitle">
          The world of Himmaleh and its
          <br />
          formidable spirits is preserved by Kumaon <br />
          and our communities.
        </div>
        <div className="color-blue text-subtitle">
          They keep our mission critical, making in <br />
          India for the world.
        </div>
        <div className="position-relative">
          <div className="circle-path-anim">
            <svg
              className="m-outline"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 79.855 31.663"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <polygon
                    points="61.964 0.501 51.905 24.695 42.016 0.514 37.866 0.501 27.807 24.695 17.917 0.514 13.768 0.501 0.755 31.162 5.765 31.162 15.824 6.968 25.713 31.15 29.863 31.162 39.922 6.968 49.812 31.15 53.961 31.162 64.036 6.933 74.112 31.162 79.1 31.15 66.108 0.501 61.964 0.501"
                    style={{ fill: "none", stroke: "#b7dcdf", strokeMiterlimit: 10 }}
                  />
                </g>
              </g>
            </svg>
            <svg viewBox="0 0 36 36" className="outline-anim">
              <path
                className="circle"
                strokeDasharray="0, 100"
                d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
          </div>

          <div className="circle-anim">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 151.656 151.652">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    d="M0,75.827A75.828,75.828,0,1,0,75.828,0,75.828,75.828,0,0,0,0,75.827"
                    style={{ fill: "#b7dcdf" }}
                  />
                  <polygon
                    points="97.866 60.495 87.807 84.69 77.917 60.508 73.768 60.495 63.708 84.69 53.818 60.508 49.669 60.495 36.656 91.156 41.667 91.156 51.726 66.963 61.615 91.145 65.765 91.156 75.823 66.963 85.714 91.145 89.862 91.156 99.938 66.927 110.013 91.156 115.002 91.145 102.01 60.495 97.866 60.495"
                    style={{ fill: "#283337" }}
                  />
                </g>
              </g>
            </svg>
          </div>
          {Array.from({ length: 11 }, (_, i) => (
            <div
              key={i}
              className={`circle-block c${i + 1}`}
              style={{ backgroundImage: `url('../../img/circles/c${i + 1}-min.jpg')` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BubbleSpread;

