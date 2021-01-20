import classNames from "classnames";
import { Transition } from "react-transition-group";
import DecoderText from "components/DecoderText";
import Divider from "components/Divider";
import Image from "components/Image";
import Section from "components/Section";

import ProfileImg from "assets/profile.jpg";
// import ProfileImgLarge from "assets/profile-large.jpg";
// import ProfileImgPlaceholder from "assets/profile-placeholder.jpg";

import { reflow } from "utils/transition";
import { media } from "utils/style";
import Heading from "components/Heading";
import Text from "components/Text";
import "./Profile.css";

import { about } from "config";
import { Col, Container, Row } from "reactstrap";
import { skills } from "config";
import Icon from "components/Icon";

const ProfileText = ({ status }) => (
  <>
    {about.aboutDescription.map((text, index) => (
      <Text
        key={index}
        className={classNames(
          "project-summary__description",
          `project-summary__description--${status}`
        )}
        size="m"
      >
        {text}
      </Text>
    ))}
  </>
);

const Profile = ({ id, visible, sectionRef }) => {
  const titleId = `${id}-title`;

  return (
    <Section
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible} timeout={0} onEnter={reflow}>
        {(status) => (
          <>
            <Container
              style={{
                position: "relative",
              }}
            >
              <Row>
                <Col xs="12" lg="6" xl="5">
                  <div className="profile__image-wrapper">
                    <Image
                      reveal
                      delay={0}
                      // placeholder={ProfileImgPlaceholder}
                      src={ProfileImg}
                      // srcSet={`${ProfileImg} 480w, ${ProfileImgLarge} 960w`}
                      sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                      alt="Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"
                    />
                  </div>
                </Col>

                <Col xs="12" lg="6" xl="7">
                  <div className="profile__tag mt-0" aria-hidden>
                    <Divider
                      notchWidth="64px"
                      notchHeight="8px"
                      collapsed={status !== "entered"}
                      collapseDelay={0}
                    />
                    <div
                      className={classNames(
                        "profile__tag-text",
                        `profile__tag-text--${status}`
                      )}
                    >
                      {about.aboutHeading}
                    </div>
                  </div>
                  <Heading
                    className={classNames(
                      "profile__title mt-5 mt-lg-0",
                      `profile__title--${status}`
                    )}
                    level={3}
                    id={titleId}
                  >
                    <DecoderText
                      text={about.aboutTitle}
                      start={status !== "exited"}
                      delay={0}
                    />
                  </Heading>
                  <ProfileText status={status} titleId={titleId} />
                  {/* <Button
                  secondary
                  className={classNames(
                    "profile__button",
                    `profile__button--${status}`
                  )}
                  target="blamk"
                  href={about.cvFileUrl}
                  icon="pdf"
                  style={{
                    fontSize: "x-large",
                  }}
                >
                  {about.aboutMeButtomText2}
                </Button> */}

                  {/* <ProjectSectionHeading>
                  <DecoderText
                    text={skills.skillsHeading}
                    start={visible}
                    delay={0}
                  />
                </ProjectSectionHeading> */}
                </Col>
              </Row>
            </Container>

            <div className="py-4">
              <Transition in={visible} timeout={0}>
                {() => (
                  <>
                    <div className="profile__tag mt-0" aria-hidden>
                      <Divider
                        notchWidth="64px"
                        notchHeight="8px"
                        collapsed={status !== "entered"}
                        collapseDelay={0}
                      />
                      <div
                        className={classNames(
                          "profile__tag-text",
                          `profile__tag-text--${status}`
                        )}
                      >
                        {skills.skillsHeading}
                      </div>
                    </div>
                    <Text
                      className={classNames(
                        "profile__description",
                        `profile__description--${status}`
                      )}
                    >
                      {skills.skillsText}
                    </Text>
                    <div className="mx-auto d-flex">
                      {skills.mySkills.map((icon, index) => (
                        <a
                          style={{
                            color: `${icon.color}`,
                            fontSize: "50px",
                          }}
                          key={index}
                          target="_blank"
                          rel="noopener noreferrer"
                          href={icon.url}
                          aria-label={`My ${icon.label}`}
                          className="navbar__nav-icon-link mx-2"
                        >
                          <Icon
                            icon={icon.icon}
                            style={{
                              fontSize: "l-large",
                            }}
                          />
                        </a>
                      ))}
                    </div>
                  </>
                )}
              </Transition>
            </div>
          </>
        )}
      </Transition>
    </Section>
  );
};

export default Profile;
