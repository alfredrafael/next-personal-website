import React from "react";
// import TypeWriter from "../2TypeWriter";

const HeroBanner = () => {
  return (
    <div className="overflow-x-hidden">
      <span className="dynamicIntro">{/* <TypeWriter /> */}</span>
      <div
        style={{
          width: "100vw",
          height: "100%",
          background: "black",
          //   backgroundImage:
          //     "url(https://www.alfredorafael.com/wp-content/uploads/2023/12/working-and-studying-e1633667573642.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        dangerouslySetInnerHTML={{
          __html: `

        <video
          style="opacity: .7; width: 100%;"
          playsinline 
          loop 
          autoPlay 
          muted 
          autobuffer 
          poster="https://www.alfredorafael.com/wp-content/uploads/2023/12/working-and-studying-e1633667573642.jpg"
        >

        <source 
          src="https://www.alfredorafael.com/wp-content/uploads/2023/12/hero-clip.mp4" type="video/mp4" />
        
        <source 
          src="https://www.alfredorafael.com/wp-content/uploads/2023/12/hero-clip.mp4" type="video/ogg" />
        Your browser does not support the video tag. I suggest you upgrade your browser.

        </video>     
`,
        }}
      ></div>
      {/* <hr
        style={{
          border: ".5px solid #D3D3D3",
          maxWidth: "70%",
          marginTop: "1em",
        }}
      /> */}
    </div>
  );
};

export default HeroBanner;
