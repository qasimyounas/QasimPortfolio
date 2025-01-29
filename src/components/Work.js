import { Fragment, useContext, useState } from "react";
import NavContext from "../context/navContext";
import {
  ImgSideBar,
  SliderSideBar,
  VideoSideBar,
  YoutubeSideBar,
} from "./WorkSideBar";

const workData = [
  {
    img: "img/projects/project-1.png",
    name: "Ideawake Project",
    format: "img",
    project: "WEBSITE",
    client: "Ideawake",
    duration: "3 MONTHS",
    technologies: ["Angular, ", "Nodejs, ", "NestJs, ", "MongoDB, ", "Postgresql, ", "AWS Web Services, ", "ElasticSearch, "],
    budget: "https://ideawake.com/",
  },
  {
    img: "img/projects/project-2.png",
    name: "EVET Market",
    format: "img",
    project: "WEBSITE , Mobile App",
    client: "EVET",
    duration: "3 MONTHS",
    technologies: ["ReactJS, ", "React Native, ", "NodeJS, ", "Express, ", "GraphQL, ","MySQL, "],
    budget: "https://play.google.com/store/apps/details?id=com.evet.market&hl=en&gl=US",
  },
  {
    img: "img/projects/project-3.png",
    name: "NEURAL CLAIM SYSTEM",
    format: "slider",
    project: "WEBSITE",
    client: "Neuralcs",
    duration: "3 MONTHS",
    technologies: ["ReactJS, ", "NodeJS, ", "Express, ","MySQL, "],
    budget: "https://www.neuralcs.com/",
  },
  {
    img: "img/projects/project-4.png",
    name: "Colaraz",
    format: "img",
    project: "Mobile App",
    client: "IBS",
    duration: "3 MONTHS",
    technologies: ["Ionic, ", "Angular, ", "SQL, ","DOTNET, "],
    budget: "https://play.google.com/store/apps/details?id=com.insigniaBiz.colaraz",
  },
  {
    img: "img/projects/project-5.png",
    name: "Revbits PAS/UP/PAM",
    format: "img",
    project: "Desktop, WEBSITE",
    client: "Revbits",
    duration: "3 MONTHS",
    technologies: ["Angular, ", "Electron, ", "ReactJs, ", "Nodejs, ", "Postgresql, ", "AWS, ", "GCP, ", "Azure, "],
    budget: "https://www.revbits.com/",
  },
  // {
  //   img: "img/projects/project-6.jpg",
  //   name: "Image Format",
  //   format: "img",
  //   project: "WEBSITE",
  //   client: "ENVATO",
  //   duration: "3 MONTHS",
  //   technologies: ["HTML", "JAVASCRIPT"],
  //   budget: "1550 USD",
  // },
  // {
  //   img: "img/projects/project-7.jpg",
  //   name: "Image Format",
  //   format: "img",
  //   project: "WEBSITE",
  //   client: "ENVATO",
  //   duration: "3 MONTHS",
  //   technologies: ["HTML", "JAVASCRIPT"],
  //   budget: "1550 USD",
  // },
  // {
  //   img: "img/projects/project-8.jpg",
  //   name: "Image Format",
  //   format: "img",
  //   project: "WEBSITE",
  //   client: "ENVATO",
  //   duration: "3 MONTHS",
  //   technologies: ["HTML", "JAVASCRIPT"],
  //   budget: "1550 USD",
  // },
  // {
  //   img: "img/projects/project-9.jpg",
  //   name: "Image Format",
  //   format: "img",
  //   project: "WEBSITE",
  //   client: "ENVATO",
  //   duration: "3 MONTHS",
  //   technologies: ["HTML", "JAVASCRIPT"],
  //   budget: "1550 USD",
  // },
];

const Work = () => {
  const { nav } = useContext(NavContext);
  const [active, setActive] = useState(null);
  return (
    <Fragment>
      <section id="work" className={`${nav === "work" ? "active" : ""}`}>
        <div
          className={`portfolio-container ${
            active ? "slide-out overflow-hidden" : ""
          }`}
        >
          {/* Main Heading Starts */}
          <div className="container page-title text-center">
            <h2 className="text-center">
              my <span>portfolio</span>
            </h2>
            <span className="title-head-subtitle">
              a few recent design and coding projects. Want to see more? Email
              me.
            </span>
          </div>
          {/* Main Heading Ends */}
          <div className="portfolio-section">
            <div className="container cd-container">
              <div>
                {/* Portfolio Items Starts */}
                <ul className="row" id="portfolio-items">
                  {workData.map((work, i) => (
                    <li className="col-12 col-md-6 col-lg-4" key={i}>
                      <a
                        href="#"
                        data-type="project-1"
                        onClick={() => setActive(i + 1)}
                      >
                        <image
                          src={work.img}
                          alt="Project"
                          className="img-fluid"
                        />
                        <div>
                          <span>{work.name}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
                {/* Portfolio Items Ends */}
              </div>
            </div>
          </div>
          {/* PORTFOLIO OVERLAY STARTS */}
          <div className="portfolio-overlay" onClick={() => setActive(null)} />
          {/* PORTFOLIO OVERLAY ENDS */}
        </div>
        {workData.map((work, i) => (
          <div
            key={i}
            className={`project-info-container project-1 ${
              active === i + 1 ? "slide-in" : ""
            }`}
          >
            {/* Main Content Starts */}
            <div className="project-info-main-content">
              {work.format == "img" ? (
                <ImgSideBar img={work.img} />
              ) : work.format == "youtube" ? (
                <YoutubeSideBar playing={active} />
              ) : work.format == "slider" ? (
                <SliderSideBar />
              ) : (
                <VideoSideBar playing={active} />
              )}
            </div>
            {/* Main Content Ends */}
            {/* Project Details Starts */}
            <div className="projects-info row">
              <div className="col-12 col-sm-6 p-none">
                <h3 className="font-weight-600 uppercase">{work.name}</h3>
                <ul className="project-details">
                  <li>
                    <i className="fa fa-file-text-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Project{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.project}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-user-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Client{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.client}
                    </span>
                  </li>
                  {/* <li>
                    <i className="fa fa-hourglass-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Duration{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.duration}
                    </span>
                  </li> */}
                  <li>
                    <i className="fa fa-code" />{" "}
                    <span className="font-weight-400 project-label">
                      {" "}
                      Technologies
                    </span>{" "}
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.technologies.map((technologie, i) => (
                        <Fragment key={i}>{technologie}</Fragment>
                      ))}
                    </span>
                  </li>
                  {/* <li>
                    <i className="fa fa-money" />{" "}
                    <span className="font-weight-400 project-label">
                      {" "}
                      Budget
                    </span>{" "}
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.budget}
                    </span>
                  </li> */}
                </ul>
                <a href={work.budget} target="_blank"  rel="noreferrer" className="btn">
                  <span>
                    <i className="fa fa-external-link" />
                    preview
                  </span>
                </a>
              </div>
              <div className="col-6 p-none text-right">
                <a
                  href="#"
                  className="btn btn-secondary close-project"
                  onClick={() => setActive(null)}
                >
                  <span>
                    <i className="fa fa-close" />
                    Close
                  </span>
                </a>
              </div>
            </div>
            {/* Project Details Ends */}
          </div>
        ))}
      </section>
      {active && (
        <span
          className={`back-mobile ${active ? "is-visible" : ""}`}
          onClick={() => setActive(null)}
        >
          <i className="fa fa-arrow-left" />
        </span>
      )}
    </Fragment>
  );
};
export default Work;
