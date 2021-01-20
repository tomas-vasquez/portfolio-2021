import { useRef, memo } from "react";

import { Transition } from "react-transition-group";
// import Monogram from "components/Monogram";
import Icon from "components/Icon";
import NavToggle from "./NavToggle";
import ThemeToggle from "./ThemeToggle";
import { useWindowSize, useAppContext } from "hooks";

import { reflow } from "utils/transition";
import { media, msToNum } from "utils/style";
import { tokens } from "components/ThemeProvider/theme";
import { blurOnMouseUp } from "utils/focus";
import "./index.css";

import { navbar } from "config";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { banner } from "config";

const NavbarIcons = () => (
  <div className="navbar__nav-icons">
    {navbar.socialLinks &&
      banner.socialLinks.map(({ label, url, icon }, index) => (
        <a
          key={index}
          className="navbar__nav-icon-link"
          aria-label={label}
          href={url}
          onMouseUp={blurOnMouseUp}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            className="navbar__nav-icon"
            style={{
              fontSize: "x-large",
            }}
            icon={icon}
          />
        </a>
      ))}
  </div>
);

function Header(props) {
  const { menuOpen, dispatch } = useAppContext();
  const windowSize = useWindowSize();
  const headerRef = useRef();
  const isMobile = windowSize.width <= media.mobile || windowSize.height <= 640;

  const handleMobileNavClick = () => {
    if (menuOpen) dispatch({ type: "toggleMenu" });
  };

  return (
    <header className="navbar" ref={headerRef}>
      <AnchorLink
        className="navbar__logo"
        href="#intro"
        aria-label="Tomás Vasquez, Developer"
        onClick={handleMobileNavClick}
        onMouseUp={blurOnMouseUp}
      >
        <img src="./logo.png" alt="Tomás vasquez" />
      </AnchorLink>

      <NavToggle
        onClick={() => dispatch({ type: "toggleMenu" })}
        menuOpen={menuOpen}
      />

      <nav className="navbar__nav">
        <div className="navbar__nav-list">
          {navbar.links.map(({ label, target }, index) => (
            <AnchorLink
              className="navbar__nav-link navbar__nav-link--active"
              // activeClassName="navbar__nav-link--active"
              key={index}
              href={target}
              onClick={handleMobileNavClick}
            >
              <span>{label}</span>
            </AnchorLink>
          ))}
        </div>
        <NavbarIcons />
      </nav>
      <Transition
        mountOnEnter
        unmountOnExit
        in={menuOpen}
        timeout={{ enter: 0, exit: msToNum(tokens.base.durationL) }}
        onEnter={reflow}
      >
        {(status) => (
          <nav className={`navbar__mobile-nav navbar__mobile-nav--${status}`}>
            {navbar.links.map(({ label, target }, index) => (
              <AnchorLink
                className={`navbar__mobile-nav-link navbar__mobile-nav-link--${status} navbar__mobile-nav-link--active`}
                activeClassName=""
                key={index}
                href={target}
                onClick={handleMobileNavClick}
              >
                <span>{label}</span>
              </AnchorLink>
            ))}

            <NavbarIcons />
            <ThemeToggle isMobile />
          </nav>
        )}
      </Transition>
      {!isMobile && <ThemeToggle />}
    </header>
  );
}

export default memo(Header);
