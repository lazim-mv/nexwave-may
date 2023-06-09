import React, { useEffect } from "react";

function About() {
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const aboutContainers = document.querySelectorAll(".aboutContainer");

  //     aboutContainers.forEach((container, index) => {
  //       container.addEventListener("mouseover", () => {
  //         container.style.zIndex = "1";
  //         container.style.height = "80vh";
  //         container.style.flexDirection = "column";
  //         container.style.alignItems = "center";
  //         container.style.justifyContent = "center";
  //         container.style.gap = "20px";
  //         container.style.opacity = "1";
  //         container.style.transitionDelay = "0.1s";
  //         // container.style.marginBottom = "100px";
  //         if (index > 0) {
  //           for (let i = 0; i < index; i++) {
  //             aboutContainers[i].style.zIndex = "-1";
  //             aboutContainers[i].style.opacity = "0.5";
  //           }
  //         }
  //       });

  //       container.addEventListener("mouseleave", () => {
  //         container.style.zIndex = "2";
  //         container.style.height = "150px";
  //         container.style.flexDirection = "row";
  //         container.style.alignItems = "center";
  //         container.style.justifyContent = "flex-start";
  //         container.style.gap = "0";
  //         container.style.opacity = "0.5";
  //         container.style.transitionDelay = "0s";
  //         container.style.marginBottom = "0";
  //         if (index > 0) {
  //           for (let i = 0; i < index; i++) {
  //             aboutContainers[i].style.zIndex = "2";
  //             aboutContainers[i].style.opacity = "0.5";
  //           }
  //         }
  //       });
  //     });
  //   }
  // }, []);

  return (
    <div id="about" className="aboutHeight reveal">
      <div className="whatWeDoContainer ">
        <h2 className="whatWeDo ">what we do</h2>
      </div>
      <div className="marginContainer ">
        <div className="aboutContainer">
          <div className="aboutH1Container ">
            <h1 className="aboutH1 ">Digital Strategy</h1>
          </div>
          <div className="aboutDesc ">
            <p className="aboutP aboutCol ">
              At the beginning of each digital product design collaboration, we
              take a deep dive into your business through our in-depth discovery
              phase. Our team of UX designers conducts stakeholder interviews,
              user research, competitive analysis, and content consolidation to
              create an action plan that delivers a seamless and comprehensive
              brand and user experience.
            </p>
          </div>
        </div>
        <div className="aboutContainer">
          <div className="aboutH1Container ">
            <h1 className="aboutH1 ">Branding</h1>
          </div>

          <div className="aboutDesc ">
            <p className="aboutP aboutCol ">
              Our branding agency knows that a brand is more than just a logo or
              digital design. It&apos;s a cohesive system that creates an
              emotional connection with customers. We offer a complete solution
              from naming and logo design to communications and style guides to
              help your brand stand out. Let&apos;s make your brand
              unforgettable!
            </p>
          </div>
        </div>
        <div className="aboutContainer">
          <div className="aboutH1Container  ">
            <h1 className="aboutH1 ">User Experience</h1>
          </div>
          <div className="aboutDesc ">
            <p className="aboutP aboutCol ">
              As a UI/UX design agency, we&apos;re committed to creating digital
              products that convert and engage customers. We go beyond mobile
              apps, web applications, and multi-platform experiences to develop
              user-friendly products that embody your brand&apos;s personality.
            </p>
          </div>
        </div>
        <div className="aboutContainer">
          <div className="aboutH1Container  ">
            <h1 className="aboutH1 ">Development</h1>
          </div>
          <div className="aboutDesc ">
            <p className="aboutP aboutCol ">
              At Nexwave, we know that great products require both top-notch
              design and development. That&apos;s why our team works closely
              together to deliver the best possible results for our clients. As
              a UX UI and app development company, we specialize in creating
              native mobile apps for iOS and Android, web applications, apps for
              wearables, and B2B/enterprise software. From front-end to back-end
              development, we&apos;ve got you covered.
            </p>
          </div>
        </div>
        <div className="aboutContainer">
          <div className="aboutH1Container  ">
            <h1 className="aboutH1 ">Web Design</h1>
          </div>
          <div className="aboutDesc ">
            <p className="aboutP aboutCol ">
              At Nexwave, we don&apos;t just make pretty websites. We craft
              experiences that tell your brand&apos;s unique story while
              engaging your users every step of the way. Our designers and
              developers work hand in hand to create websites that are
              responsive, dynamic, and can adapt to any device. From product
              landing pages to marketing sites, or UX UI for company intranet
              portals – you name it, we do it.
            </p>
          </div>
        </div>
        <div className="aboutContainer">
          <div className="aboutH1Container ">
            <h1 className="aboutH1 ">Enterprise UX</h1>
          </div>
          <div className="aboutDesc ">
            <p className="aboutP aboutCol ">
              At Nexwave, we believe that business software shouldn&apos;t be
              boring or hard to use. It&apos;s time to say goodbye to clunky,
              outdated enterprise platforms and hello to sleek, modern designs
              that your employees will love. We&apos;re a team of experts
              dedicated to transforming your legacy systems into top-notch,
              consumer-grade experiences. Whether it&apos;s revamping existing
              platforms or designing new B2B products, our goal is to create
              software that people love using.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
