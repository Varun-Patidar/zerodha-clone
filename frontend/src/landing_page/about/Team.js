import React from "react";

export default function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row mt-5 mb-5 text-muted fs-6"
        style={{ lineHeight: "1.8", fontSize: "1.2rem" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/varun.png"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h4 className="mt-5">Varun Patidar</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            I am currently pursuing a Bachelor of Technology (B.Tech) and have
            developed a strong foundation in computer science and software
            development. Throughout my academic journey, I have focused on
            strengthening my problem-solving skills and gaining practical
            experience by building real-world web applications. I enjoy learning
            new technologies and continuously improving my technical knowledge
            through hands-on projects.
          </p>
          <p>
            As an aspiring Full Stack Web Developer, I specialize in building
            responsive and scalable web applications using React.js, Node.js,
            Express.js, MongoDB, and JavaScript. I have developed projects such
            as an Airbnb Clone, a Video Calling Application, a Weather App.
            My goal is to contribute to innovative
            software solutions while continuously learning and growing as a
            software engineer.
          </p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
