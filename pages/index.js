import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

import HeroBanner from "@components/HeroBanner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroBanner />
      <main className="container mx-auto px-16 py-2">
        {/* //////////////////////////////////////////////////////////////////////////////// */}
        <section>
          <h2 className="" style={{ fontSize: "150%", margin: "1em 0" }}>
            <strong>
              About
              <span className="text-blue-800 opacity-80"> Alfredo Rafael</span>
            </strong>
          </h2>
          <div className="flex justify-center">
            {/* <img
            className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] rounded-full object-cover shape-outside-circle"
            src="http://www.alfredorafael.com/wp-content/uploads/2023/12/Alfredo-picture.png"
            alt="A photograph of Alfredo Rafael"
          /> */}

            <p style={{ fontSize: "120%" }}>
              Hi! I’m a US Army veteran, educator and a{" "}
              <span>front end developer</span>. I create <span>React.js</span>{" "}
              and <span>WordPress</span> applications for your business or
              organization. My experience coding responsive and engaging user
              interfaces (<span>from wireframe to deployment</span>) and
              teamwork attitude are my greatest assets. I look forward to
              combining my software engineering skills with my teaching ability
              and experience. Welcome to my website!
            </p>
          </div>
        </section>
        {/* //////////////////////////////////////////////////////////////////////////////// */}
        <section id="services" className="py-12">
          <div className="mx-auto">
            <h2
              className="text-3xl font-bold mb-8"
              style={{ fontSize: "150%" }}
            >
              How Can{" "}
              <span className="text-blue-800 opacity-80">I Help You</span>?
            </h2>

            <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
              <div className="w-full md:w-1/2 text-center">
                <h4 className="block sm:hidden text-lg font-semibold mb-4">
                  UX Design
                </h4>
                <img
                  src="http://www.alfredorafael.com/wp-content/uploads/2024/02/UX_Diagram.png"
                  alt="UX design example"
                  className="mx-auto w-[55%]"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-8">
                <h4
                  className="hidden sm:block text-lg font-semibold mb-4"
                  style={{ fontSize: "150%" }}
                >
                  UX/UI Design
                </h4>
                <p
                  className="text-lg leading-relaxed"
                  style={{ fontSize: "120%" }}
                >
                  Need to translate your idea into a fully functional web
                  application? From logo design and color palette to wireframe,
                  we'll develop a template that mirrors your application's look
                  and technical needs before diving into production.
                </p>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-300 max-w-[25%] mx-auto mb-12" />

            {/* UI Development */}

            <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
              <div className="w-full md:w-1/2 text-center">
                <h4 className="block sm:hidden text-lg font-semibold mb-4">
                  UI Development
                </h4>
                <img
                  src="http://www.alfredorafael.com/wp-content/uploads/2024/02/Dev_Diagram.png"
                  alt="UI development logo"
                  className="mx-auto w-[52%]"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-8">
                <h4
                  className="hidden sm:block text-lg font-semibold mb-4"
                  style={{ fontSize: "150%" }}
                >
                  UI Development
                </h4>
                <p
                  className="text-lg leading-relaxed"
                  style={{ fontSize: "120%" }}
                >
                  Once we identify your website's design, feel, and technical
                  needs, we'll use our software development tools to bring your
                  project to life. My expertise includes JavaScript (jQuery,
                  React.js), CSS, HTML5, GitHub, Netlify, and WordPress CMS.
                </p>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-300 max-w-[25%] mx-auto mb-12" />

            {/* Tech Advisory */}

            <div className="flex flex-col md:flex-row items-center md:items-start">
              <div className="w-full md:w-1/2 text-center">
                <h4 className="block sm:hidden text-lg font-semibold mb-4">
                  Tech Advisory
                </h4>
                <img
                  src="http://www.alfredorafael.com/wp-content/uploads/2024/02/Advisor_Diagram.png"
                  alt="Tech advisory logo"
                  className="mx-auto w-[55%]"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-8">
                <h4
                  className="hidden sm:block text-lg font-semibold mb-4"
                  style={{ fontSize: "150%" }}
                >
                  Tech Advisory
                </h4>
                <p
                  className="text-lg leading-relaxed"
                  style={{ fontSize: "120%" }}
                >
                  Along the way, I'll provide you with advice on best user
                  experience practices, software alternatives, and maintenance
                  tools that best suit your project needs. Developing this
                  helpful relationship with clients is one of the dimensions I
                  enjoy the most.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
