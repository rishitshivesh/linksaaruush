import React from "react";

import classes from "./Footer.module.css";
import teamEnvisionLogo from "../../assets/images/teamEnvision_logo.png";
import blog from "../../assets/images/blog.png";

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className={classes.main + " col-12 row mx-auto"}>
          <div className="col-4 d-none d-lg-block"></div>
          <div className="row my-5 mx-auto col-12 col-sm-9 col-lg-4">
            <div className="mx-3 mx-auto">
              <a
                href="http://aaruush.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://image.flaticon.com/icons/svg/2301/2301129.svg"
                  alt="aaruush.org"
                  width="30px"
                />
              </a>
            </div>
            <div className="mx-3 mx-auto">
              <a
                href="https://www.instagram.com/aaruush_srm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://image.flaticon.com/icons/svg/1384/1384031.svg"
                  alt="aaruush_instagram"
                  width="30px"
                />
              </a>
            </div>
            <div className="mx-3 mx-auto">
              <a
                href="https://www.facebook.com/aaruush.srm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://image.flaticon.com/icons/svg/733/733605.svg"
                  alt="aaruush_facebook"
                  width="30px"
                />
              </a>
            </div>
            <div className="mx-3 mx-auto">
              <a
                href="https://twitter.com/aaruushsrmist?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://image.flaticon.com/icons/svg/733/733635.svg"
                  alt="aaruush_twitter"
                  width="35px"
                />
              </a>
            </div>
            <div className="mx-3 mx-auto">
              <a
                href="https://www.linkedin.com/in/aaruush"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://image.flaticon.com/icons/svg/2111/2111532.svg"
                  alt="aaruush_linkedin"
                  width="30px"
                />
              </a>
            </div>
            <div className="mx-3 mx-auto">
              <a
                href="https://www.youtube.com/channel/UC6mwWpwkZchii-oyWz0v3dw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://image.flaticon.com/icons/svg/1384/1384028.svg"
                  alt="aaruush_youtube"
                  width="40px"
                />
              </a>
            </div>
            <div className="mx-3 mx-auto">
              <a
                href="https://aaruushblog.wordpress.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={blog} alt="aaruush_blog" width="32px" />
              </a>
            </div>
          </div>
          <div className="mb-5 my-lg-5 col-12 col-lg-4 mx-auto text-center text-lg-right">
            <a
              href="https://team-envision.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={teamEnvisionLogo} alt="" width="250px" />
            </a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
