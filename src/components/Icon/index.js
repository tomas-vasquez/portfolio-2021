import React from "react";

import { ReactSVG } from "react-svg";
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
  faBars,
  faArrowRight,
  faFilePdf,
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
  faDocker,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";

import mongo from "assets/icons/mongo.png";
import mysql from "assets/icons/mysql.png";
import ionic from "assets/icons/ionic.png";
import electron from "assets/icons/electron.png";

export const icons = {
  mongo: mongo,
  mysql: mysql,
  ionic: ionic,
  electron: electron,
};

const getIcon = (icon) => {
  switch (icon) {
    case "pdf":
      return faFilePdf;

    case "arrowRight":
      return faArrowRight;

    case "menu":
      return faBars;

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

    case "html5":
      return faHtml5;

    case "docker":
      return faDocker;

    default:
      return null;
  }
};

export default (props) => {
  const faIcon = getIcon(props.icon);
  if (faIcon) {
    return <FontAwesomeIcon {...props} icon={faIcon} />;
  }

  const icon = icons[props.icon];
  if (icon) {
    return <img src={icon} alt={""} width="50px" {...props} />;
  }

  return <FontAwesomeIcon {...props} icon={faTimes} />;
};
