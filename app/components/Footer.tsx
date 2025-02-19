import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Footer: React.FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const footerPaths = Array.from(document.querySelectorAll<SVGPathElement>(".footer-anim"));
    const timelines = footerPaths.map(el => {
      return gsap.timeline({
        scrollTrigger: {
          trigger: "#footer-svg",
          start: "0% 75%",
          end: "50% 75%",
          scrub: true,
          markers: false,
          onUpdate: updateValues,
        },
      }).to(el, {
        y: 0,
        ease: "none",
        duration: 1,
        transfo: "matrix(1, 0, 0, 1, 0, 0)",
      });
    });

    return () => {
      timelines.forEach(tl => tl.kill());
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const updateValues = () => {
    // Define the function to handle updates here
  };

  return (
    <footer className="main-footer">
      <div className="footer-top">
        <div className="footer-block">
          <h4>COPYRIGHT</h4>
          <div>2023 Himalaya Wine Company</div>
          <div className="nyuct">Website designed and developed by NYUCT Design Labs</div>
        </div>

        <div className="footer-block">
          <h4>SOCIAL</h4>
          <ul className="p-0">
            <li>
              <a href="https://www.instagram.com/himmalehspirits/">Instagram</a>
            </li>
          </ul>
        </div>

        <div className="footer-block">
          <h4>HARYANA OFFICE</h4>
          <div>
            Himmaleh Spirits
            <br />
            Unit no 004, Ground Floor
            <br />
            FBD One,
            <br />
            Main Mathura Road, Molar Band Extension, Sector 37,
            <br />
            Faridabad, Haryana -121003
          </div>
        </div>

        <div className="footer-block">
          <h4>HIMMALEH DISTILLERY</h4>
          <div>
            Plot No. 2A, Sector 4<br />
            IIE - Escort Farm, Kashipur
            <br />
            District Udham Singh Nagar
            <br />
            Uttarakhand
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <svg id="footer-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="47.585cm" height="6.253cm"
          viewBox="0 0 1348.863 177.237">
          <path className="footer-svg-path letter-1"
            d="M68.905 81.618L14.899 81.618L14.899 41.479L0 41.479L0 141.639L14.899 141.639L14.899 95.872L68.905 95.872L68.905 141.639L83.803 141.639L83.803 41.479L68.905 41.479L68.905 81.618z" />
          <path className="footer-svg-path footer-anim letter-2" transform="matrix(1, 0, 0, 1, 0, 35)"
            d="M116.462 41.478h14.898v100.161H116.462Z" />
          <path
            d="M463.173,40.839l-42.142,100.8h16.016l7.339-17.706H491.1l7.351,17.706h16.413L472.58,40.839Zm-12.985,69.1,17.361-41.884.165-.388.208.453,17.363,41.819Z"
            className="footer-svg-path letter-3" />
          <path className="footer-svg-path letter-4 footer-anim" d="M545.4,40.8h-14.9V141h57v-14.4h-42.1V40.8z" />
          <path className="footer-svg-path letter-5"
            d="M620.929 94.467L662.884 94.467L662.884 80.47L620.929 80.47L620.929 55.604L666.34 55.604L666.34 41.479L606.036 41.479L606.036 141.639L667.742 141.639L667.742 127.514L620.929 127.514L620.929 94.467z" />
          <path className="footer-svg-path letter-6 footer-anim"
            d="M760.103 81.618L706.097 81.618L706.097 41.479L691.198 41.479L691.198 141.639L706.097 141.639L706.097 95.872L760.103 95.872L760.103 141.639L775.001 141.639L775.001 41.479L760.103 41.479L760.103 81.618z" />
          <path className="footer-svg-path footer-anim letter-7"
            d="M353.405 40.84L320.337 120.379L287.825 40.881L274.184 40.84L241.113 120.379L208.6 40.881L194.959 40.84L152.179 141.639L168.65 141.639L201.718 62.1L234.23 141.599L247.871 141.639L280.942 62.1L313.455 141.599L327.096 141.639L360.216 61.986L393.34 141.639L409.74 141.599L367.029 40.84L353.405 40.84z" />
          <path
            d="M904.163,87.268q-6.051-4.242-12.09-8.3a42.167,42.167,0,0,1-9.271-8.333,13,13,0,0,1-3.236-8.418c0-3.059,0-9.428,14.283-9.428a43.058,43.058,0,0,1,16.825,3.614l3.989,1.694,5.622-12.872-3.869-1.807a54.289,54.289,0,0,0-23.137-5.011c-8.61,0-15.632,2.1-20.868,6.249-5.56,4.392-8.376,10.385-8.376,17.814A26.43,26.43,0,0,0,869.044,77.9a48.294,48.294,0,0,0,11.247,11.389q6.049,4.371,12.092,8.553a44.894,44.894,0,0,1,9.323,8.5,12.7,12.7,0,0,1,3.232,8.162c0,4.177-1.311,7.1-4.125,9.216-3.13,2.347-7.925,3.536-14.251,3.536a31.606,31.606,0,0,1-17.8-5.3l-3.631-2.371-7.811,11.72,3.414,2.469c7.208,5.217,15.965,7.862,26.023,7.862,10.1,0,18.239-2.3,24.2-6.839,6.32-4.818,9.525-11.9,9.525-21.062A25.876,25.876,0,0,0,915.435,98.4a47.31,47.31,0,0,0-11.272-11.135"
            className="footer-svg-path footer-anim letter-8" />
          <path className="footer-svg-path letter-9 footer-anim" d="M1024.829 41.478h14.892v100.161H1024.829Z" />
          <path
            d="M1132.225,120.72c-1.262-1.415-4.227-5.141-8.818-11.076-3.464-4.478-6.521-8.51-9.133-12.036a51.138,51.138,0,0,0,8.461-9.733,31.439,31.439,0,0,0,5.614-17.929c0-9.544-3.392-17.084-10.088-22.41-6.392-5.086-14.538-7.666-24.2-7.666-5.562,0-12.315.3-20.646.907l-4.058.3v99.471h14.892V103.253c5,.279,10.409.436,16.148.467,11.12,15.226,17.993,24.164,20.99,27.294a35.325,35.325,0,0,0,10.6,7.786c3.779,1.741,8.628,2.67,14.409,2.767l4.312.072.4-12.424-4-.467c-5.559-.648-10.448-3.3-14.882-8.028m-24.613-36.759c-3.322,3.857-6.33,5.895-8.7,5.895-4.562,0-9.479-.134-14.671-.4V54.387c3.353-.174,6.38-.26,9.042-.26,6.228,0,11.2,1.395,14.789,4.143,3.273,2.517,4.866,6.231,4.866,11.357a21.084,21.084,0,0,1-5.331,14.334"
            className="footer-svg-path letter-10" />
          <path className="footer-svg-path letter-11 footer-anim" d="M1168.035 41.478h14.893v100.161H1168.035Z" />
          <path className="footer-svg-path letter-12"
            d="M1201.533 55.604L1232.464 55.604L1232.464 141.639L1247.363 141.639L1247.363 55.604L1278.3 55.604L1278.3 41.478L1201.533 41.478L1201.533 55.604z" />
          <path
            d="M1343.823,98.4a47.31,47.31,0,0,0-11.272-11.135q-6.051-4.242-12.091-8.3a42.212,42.212,0,0,1-9.271-8.333,13.005,13.005,0,0,1-3.235-8.418c0-3.06,0-9.428,14.282-9.428a43.047,43.047,0,0,1,16.826,3.615l3.988,1.693,5.622-12.871-3.868-1.808a54.279,54.279,0,0,0-23.138-5.012c-8.61,0-15.631,2.1-20.868,6.249-5.559,4.393-8.376,10.386-8.376,17.815a26.424,26.424,0,0,0,5.01,15.429,48.285,48.285,0,0,0,11.245,11.389q6.053,4.369,12.094,8.552a44.9,44.9,0,0,1,9.323,8.5,12.7,12.7,0,0,1,3.232,8.161c0,4.177-1.312,7.1-4.125,9.217-3.13,2.346-7.925,3.535-14.251,3.535a31.606,31.606,0,0,1-17.8-5.3l-3.632-2.372-7.811,11.72,3.415,2.469c7.207,5.217,15.964,7.863,26.022,7.863,10.1,0,18.24-2.3,24.195-6.839,6.32-4.819,9.525-11.9,9.525-21.062a25.875,25.875,0,0,0-5.04-15.335"
            className="footer-svg-path footer-anim letter-13" />
          <path
            d="M992.262,47.2c-6.235-4.812-14.466-7.251-24.46-7.251-6.816,0-13.954.354-21.216,1.054l-4,.386V141.639h15.046V103.288h2.29c11.245,0,21.1-3.049,29.284-9.059,8.611-6.321,12.976-14.558,12.976-24.485,0-9.882-3.338-17.468-9.921-22.548M979.053,84.284c-5.57,3.967-12,5.894-19.646,5.894h-1.774V54.608c3.384-.174,6.446-.262,9.135-.262,6.409,0,11.479,1.339,15.071,3.982,3.218,2.365,4.782,6.31,4.782,12.062,0,5.721-2.476,10.267-7.568,13.894"
            className="footer-svg-path letter-14" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;