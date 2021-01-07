import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPaperPlane,
  faStar,
  faTimes,
  faArrowDown,
  faGlobe,
  faUser,
  faRocket,
  faArchive,
  faBriefcase,
  faMapPin,
  faCircle,
  faFile,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
  faReact,
  faAngular,
  faVuejs,
  faBootstrap,
  faJsSquare,
  faNodeJs,
  faWhatsapp,
  faFirefoxBrowser,
} from "@fortawesome/free-brands-svg-icons";

const getIcon = (icon) => {
  switch (icon) {
    case "download":
      return faDownload;

    case "file":
      return faFile;

    case "dot":
      return faCircle;

    case "globe":
      return faFirefoxBrowser;

    case "vercel":
      return faGlobe;

    case "pointer":
      return faMapPin;

    case "briefcase":
      return faBriefcase;

    case "archive":
      return faArchive;

    case "rocket":
      return faRocket;
    case "user":
      return faUser;

    case "hear":
      return faGlobe;

    case "arrowDown":
      return faArrowDown;

    case "send":
      return faPaperPlane;
    case "gmail":
      return faEnvelope;

    case "wathsapp":
      return faWhatsapp;
    case "star":
      return faStar;

    case "github":
      return faGithub;

    case "facebook":
      return faFacebook;

    case "twitter":
      return faTwitter;

    case "instagram":
      return faInstagram;

    case "youtube":
      return faYoutube;

    case "linkedin":
      return faLinkedin;

    case "node":
      return faNodeJs;

    case "js":
      return faJsSquare;

    case "react":
      return faReact;

    case "angular":
      return faAngular;

    case "vuejs":
      return faVuejs;

    case "bootstrap":
      return faBootstrap;

    default:
      return faTimes;
  }
};

export default (props) => {
  return (
    <FontAwesomeIcon
      {...props}
      style={{
        fontSize: "x-large",
      }}
      icon={getIcon(props.icon)}
    />
  );
};
