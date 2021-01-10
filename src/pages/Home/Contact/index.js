import { ProjectSectionHeading } from "components/ProjectLayout";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { contactMe, navbar } from "config";
import DecoderText from "components/DecoderText";
import { useInView } from "react-intersection-observer";
import { Transition } from "react-transition-group";
import Text from "components/Text";
import classNames from "classnames";
import Icon from "components/Icon";

export default function Contact({ id }) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div id={id} ref={ref} className="py-5">
      <Container>
        <Row className="d-flex">
          <Col
            xs="12"
            md="9"
            className="mx-auto"
            style={{
              textAlign: "center",
            }}
          >
            <Transition in={inView} timeout={0}>
              {(status) => (
                <>
                  <ProjectSectionHeading>
                    <DecoderText
                      text={contactMe.contactMeTitle}
                      start={inView}
                      delay={0}
                    />
                  </ProjectSectionHeading>
                  <Text
                    className={classNames(
                      "profile__description",
                      `profile__description--${status}`
                    )}
                    size="l"
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: contactMe.contactMeText,
                      }}
                    />
                  </Text>
                </>
              )}
            </Transition>
          </Col>
        </Row>
        <div className="d-flex">
          <div className="mx-auto d-flex">
            <Transition in={inView} timeout={0}>
              {() =>
                navbar.socialLinks.map((icon, index) => (
                  <a
                    style={{
                      fontSize: "64px",
                      border: "solid 2px",
                      borderRadius: "50%",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={icon.url}
                    aria-label={`My ${icon.icon}`}
                    className="navbar__nav-icon-link"
                  >
                    <Icon
                      icon={icon.icon}
                      style={{
                        fontSize: "20px",
                      }}
                    />
                  </a>
                ))
              }
            </Transition>
          </div>
        </div>
      </Container>
    </div>
  );
}
