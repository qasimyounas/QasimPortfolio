import { useContext } from "react";
import NavContext from "../context/navContext";
const About = () => {
  const { nav } = useContext(NavContext);
  return (
    <section id="about" className={`${nav === "about" ? "active" : ""}`}>
      {/* Main Heading Starts */}
      <div className="container page-title text-center">
        <h2 className="text-center">
          about <span>me</span>
        </h2>
        <span className="title-head-subtitle">
          I design and code beautiful things, and I love what I do.
        </span>
      </div>
      {/* Main Heading Ends */}
      <div className="container infos">
        <div className="row personal-info">
          {/* Personal Infos Starts */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-container">
              <img
                className="img-fluid d-block"
                src="img/dark-about.jpg"
                alt=""
              />
            </div>
            <p className="d-block d-md-none">
              {`I'm`} a UI/UX and frontend developer with a passion for DRY architecture. Skilled in HTML, CSS, Bootstrap,
            Tailwind, SCSS, JavaScript, jQuery, ReactJS, Angular, and more.
            Comfortable working across the application layer, I specialize in supporting legacy systems,
            conducting in-depth analysis, and refining software architecture through refactoring.
            </p>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-12">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-1">
                <li>
                  <h6>
                    <span className="font-weight-600">First Name</span>
                    Muhammad
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Last Name</span>
                    Qasim
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Birthdate</span>20 August
                    1999
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Nationality</span>
                    Pakistan
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Experience</span>2+ years
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Address</span>
                    Amir Town, Lahore, Pakistan.
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-2">
                <li>
                  <h6>
                    <span className="font-weight-600">Freelance</span>
                    Available
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Langages</span>
                    English, Urdu
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Phone</span>+923224648461
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Email</span>
                    qasimyounasqureshi@gmail.com
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Skype</span>
                    live:.cid.7a84b5f6272618b0
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">linkedin</span>
                    muhammad-qasim
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-12 resume-btn-container">
              <a href="img/Resume.pdf" target="_blank" className="btn btn-resume">
                <span>
                  <i className="fa fa-download" />
                  download my cv
                </span>
              </a>
            </div>
          </div>
          {/* Personal Infos Ends */}
        </div>
      </div>
      {/* Download CV Starts */}
      <div className="container col-12 mx-auto text-center">
        <hr className="about-section" />
      </div>
      {/* Download CV Ends */}
      {/* Resume Starts */}
      <div className="resume-container">
        <div className="container">
          <div className="row">
            {/* Experience Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h2 className="font-weight-600 uppercase title-section">
                experience
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        11/2023 - present
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Software Engineer
                        <span className="separator" />
                        <span className="font-weight-700">NgXoft Solutions</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                      Working here as a MEAN stack developer and have experience in working on the latest technology set.<br/>
                      Hands-on Multi-platforms applications, Large Scale Web Apps, Design systems and deployments. <br/>
                      Code cleaning, Optimize, and Restructuring apps
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        09/2022 - 10/2023
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                          Frontend Developer
                        <span className="separator" />
                        <span className="font-weight-700">NgXoft Solutions</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                      Implemented websites, mobile applications, and landing pages from concept through deployment. <br/>
                      Utilize HTML, CSS, Bootstrap, and JavaScript to create responsive landing pages for the company <br/>
                      Employed best practices in front-end development, including code splitting, lazy loading, and performance optimization to enhance application speed and responsiveness.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                {/* <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        02/2022 - 08/2022
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                          Software Engineer Intern
                        <span className="separator" />
                        <span className="font-weight-700">Insignia Business Solutions</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                      Hands on, Web Design and development. <br/>
                      Work on cutting-edge technology like React JS with python. <br/>
                      Worked with cross-functional teams to troubleshoot and resolve issues, ensuring timely project delivery. 
                      </p>
                    </div>
                  </div>
                </div> */}
                {/* Item Ends */}
              </div>
              <h2 className="font-weight-600 uppercase title-section mt-4 pt-4">
              Certification
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        07/2025
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                      Artificial Intelligence Fundamentals
                        <span className="separator" />
                        <span className="font-weight-700"> IBM</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                      Complete Artificial Intelligene Fundamentals, a prescribed set of courses, designed by IBM <br></br>
                      <a href="https://www.credly.com/badges/ae585d25-87cf-4561-94b0-eff6af9761a7/linked_in_profile" target="blank"> Show Credential </a>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6 skills-container">
              <h2 className="font-weight-600 uppercase title-section">
                Education
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                         2018 - 2022
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Bachelor&apos;s in Computer Science
                        <span className="separator" />
                        <span className="font-weight-700">
                          <br/> Superior university , Lahore
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        CGPA 3.54
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2016 - 2018
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Intermediate in Computer Science (I.CS)
                        <span className="separator" />
                        <span className="font-weight-700">
                          <br/> Punjab Collage , Lahore
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Grade A
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2014 - 2016
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                          Matriculation
                        <span className="separator" />
                        <span className="font-weight-700">
                         <br/> Government Public High School 
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                       Grade A+
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Education Ends */}
          </div>
          {/* Skills Starts */}
          <div className="row">
            {/* Skill Bar Starts */}
            <div className="col-12">
              <h2 className="font-weight-600 uppercase title-section skills-title">
                skills
              </h2>
            </div>
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-2">
              <span className="skill-text">Angular JS</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                {/* <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span> */}
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-2">
              <span className="skill-text">React JS</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                {/* <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span> */}
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-2">
              <span className="skill-text">Next JS</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                {/* <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span> */}
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-2">
              <span className="skill-text">TypeScript</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                {/* <span className="percent" style={{ right: "calc(15% - 21px)" }}>
                  85%
                  <b className="arrow" />
                </span> */}
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-2">
              <span className="skill-text">Jquery</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                {/* <span className="percent" style={{ right: "calc(15% - 21px)" }}>
                  85%
                  <b className="arrow" />
                </span> */}
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-2">
              <span className="skill-text">Redux</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                {/* <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span> */}
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            {/* <div className="col-12 col-sm-6 col-md-2">
              <span className="skill-text">Rxjs/NgRx</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
              </div>
            </div> */}
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-2">
              <span className="skill-text">Tailwind css</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                {/* <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span> */}
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-2">
              <span className="skill-text">Sass/Scss/Less</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                {/* <span className="percent" style={{ right: "calc(15% - 21px)" }}>
                  85%
                  <b className="arrow" />
                </span> */}
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            {/* <div className="col-12 col-sm-6 col-md-2">
              <span className="skill-text">Ionic</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
              </div>
            </div> */}
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-2">
              <span className="skill-text">React Native</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                {/* <span className="percent" style={{ right: "calc(15% - 21px)" }}>
                  85%
                  <b className="arrow" />
                </span> */}
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-2">
              <span className="skill-text">ElectronJs</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                {/* <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span> */}
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            {/* <div className="col-12 col-sm-6 col-md-2">
              <span className="skill-text">Flutter</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
              </div>
            </div> */}
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-2">
              <span className="skill-text">Node JS</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                {/* <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span> */}
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-2">
              <span className="skill-text">Express</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                {/* <span className="percent" style={{ right: "calc(15% - 21px)" }}>
                  85%
                  <b className="arrow" />
                </span> */}
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            {/* <div className="col-12 col-sm-6 col-md-2">
              <span className="skill-text">AdonisJS</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                <span className="percent" style={{ right: "calc(15% - 21px)" }}>
                  85%
                  <b className="arrow" />
                </span>
              </div>
            </div> */}
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-2">
              <span className="skill-text">NestJs</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                {/* <span className="percent" style={{ right: "calc(15% - 21px)" }}>
                  85%
                  <b className="arrow" />
                </span> */}
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            {/* <div className="col-12 col-sm-6 col-md-2">
              <span className="skill-text">Strapi</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span>
              </div>
            </div> */}
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-2">
              <span className="skill-text">wordpress</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                {/* <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span> */}
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-2">
              <span className="skill-text">Woocommerce</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                {/* <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span> */}
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            {/* <div className="col-12 col-sm-6 col-md-2">
              <span className="skill-text">Laravel</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                <span className="percent" style={{ right: "calc(15% - 21px)" }}>
                  85%
                  <b className="arrow" />
                </span>
              </div>
            </div> */}
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            {/* <div className="col-12 col-sm-6 col-md-2">
              <span className="skill-text">GraphQL</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                <span className="percent" style={{ right: "calc(15% - 21px)" }}>
                  85%
                  <b className="arrow" />
                </span>
              </div>
            </div> */}
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-2">
              <span className="skill-text">SQL/MySQL</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                {/* <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span> */}
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            {/* <div className="col-12 col-sm-6 col-md-2">
              <span className="skill-text">Postgresql</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span>
              </div>
            </div> */}
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            {/* <div className="col-12 col-sm-6 col-md-2">
              <span className="skill-text">Firebase</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span>
              </div>
            </div> */}
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-2">
              <span className="skill-text">AWS Services</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                {/* <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span> */}
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-2">
              <span className="skill-text">Microservices</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                {/* <span className="percent" style={{ right: "calc(15% - 21px)" }}>
                  85%
                  <b className="arrow" />
                </span> */}
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            {/* <div className="col-12 col-sm-6 col-md-2">
              <span className="skill-text">Socket.io</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                <span className="percent" style={{ right: "calc(15% - 21px)" }}>
                  85%
                  <b className="arrow" />
                </span>
              </div>
            </div> */}
            {/* Skill Bar Ends */}
          </div>
          {/* Skills Starts */}
        </div>
        {/* Resume Ends */}
      </div>
    </section>
  );
};
export default About;
