import AboutUs from "@/components/Home/AboutUs";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import Location from "@/components/Home/Location";
import { Newsletter } from "@/components/Home/Newsletter";
import ShopImages from "@/components/Home/ShopImages";
import Testimonials from "@/components/Home/Testimonials";
import WhatWeSell from "@/components/Home/WhatWeSell";
import {SummerSpecials} from "@/components/Home/Specials";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Hero />
      <AboutUs />

      {/* Restaurant Guru recommended badge */}
      <link
        href="https://awards.infcdn.net/2026/circle_v2.css"
        rel="stylesheet"
      />
      <div className="flex justify-center py-8">
        <a
          href="https://restaurant-guru.in/Oh-Shakes-Bikaner"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Oh Shakes - Recommended on Restaurant Guru 2026"
          className="block no-underline"
        >
        <div
          id="circle-r-ribbon"
          style={{
            overflow: "hidden",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: 0,
            maxWidth: "174px",
            minWidth: "174px",
            height: "135px",
            font: "400 10px/normal 'Akrobat Bold', 'Helvetica Neue', 'Arial', sans-serif",
            alignItems: "center",
            textAlign: "center",
            color: "#000",
            textShadow: "none",
            background:
              "url(https://awards.infcdn.net/img/bg.svg) no-repeat",
            boxSizing: "border-box",
          }}
        >
          <div
            className="r-ribbon_ahead"
            style={{
              transform: "rotate(-11deg)",
              position: "absolute",
              zIndex: 4,
              top: "-7px",
              left: "6px",
              letterSpacing: "0.2px",
              padding: 0,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="160px"
              height="160px"
              viewBox="0 0 160 160"
              style={{ width: "160px", height: "160px", marginTop: 0 }}
            >
              <defs>
                <path id="heading-arc" d="M 30 80 a 50 50 0 1 1 100 0" />
              </defs>
              <text
                className="r-ribbon_ahead-heading"
                fill="#000"
                textAnchor="middle"
                style={{
                  fontSize: "16px",
                  fontFamily:
                    "'Akrobat Bold', 'Helvetica Neue', 'Arial', sans-serif",
                  lineHeight: 1,
                  textTransform: "uppercase",
                  alignmentBaseline: "auto",
                }}
              >
                <textPath startOffset="50%" xlinkHref="#heading-arc">
                  Recommended
                </textPath>
              </text>
            </svg>
          </div>
          <p
            className="r-ribbon_year"
            style={{
              color: "#000",
              width: "140px",
              font: "22px/normal 'Akrobat Black', 'Helvetica Neue', 'Arial', sans-serif",
              fontStyle: "italic",
              transform: "rotate(-12deg)",
              position: "absolute",
              top: "41px",
              left: "12px",
              letterSpacing: "0.6px",
              textAlign: "center",
              padding: 0,
              margin: 0,
            }}
          >
            2026
          </p>
          <span
            className="r-ribbon_title"
            style={{
              textTransform: "uppercase",
              color: "#fff",
              width: "140px",
              fontSize: "16px",
              lineHeight: "normal",
              fontFamily:
                "'Akrobat Bold', 'Helvetica Neue', 'Arial', sans-serif",
              fontStyle: "italic",
              transform: "rotate(-12deg)",
              position: "absolute",
              zIndex: 5,
              top: "72px",
              left: "12px",
              letterSpacing: "0.4px",
              textAlign: "center",
              whiteSpace: "normal",
              padding: 0,
              margin: 0,
              textDecoration: "none",
            }}
          >
            Oh Shakes
          </span>
          <div
            className="r-ribbon_ahead r-ribbon_ahead-bottom"
            style={{
              top: "auto",
              bottom: "-14px",
              left: "26px",
              letterSpacing: "0.3px",
              transform: "rotate(-13deg)",
              height: "100%",
              maxWidth: "100%",
              padding: 0,
              position: "absolute",
              zIndex: 4,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="120px"
              height="120px"
              viewBox="0 0 120 120"
              style={{ width: "120px", height: "120px", marginTop: 0 }}
            >
              <defs>
                <path id="subheading-arc" d="M 12 60 a 48 48 0 0 0 96 0" />
              </defs>
              <text
                className="r-ribbon_ahead-subh"
                fill="#000"
                textAnchor="middle"
                style={{
                  font: "12px/1 'Akrobat Regular', 'Helvetica Neue', 'Arial', sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "normal",
                }}
              >
                <textPath startOffset="50%" xlinkHref="#subheading-arc">
                  Restaurant Guru
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </a>
      </div>

      <SummerSpecials />
      <ShopImages />
      <WhatWeSell />
      <Features />
      <Testimonials />
      <Location />
      <Newsletter />
    </div>
  );
};

export default Home;
