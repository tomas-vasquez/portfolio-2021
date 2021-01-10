import App from "./App";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import Divider from "components/Divider";
import Text from "components/Text";
import Heading from "components/Heading";
import { Transition } from "react-transition-group";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

import { about } from "config";

export default function Music() {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="d-flex section">
      <Container className="m-auto mt-lg-5">
        <Row>
          <Col xs="12" lg="6" xl="5" className="d-flex mt-5">
            <Transition in={inView} timeout={0}>
              {(status) => (
                <div className="my-auto">
                  <div aria-hidden className="project-summary__index">
                    <Divider
                      notchWidth="64px"
                      notchHeight="8px"
                      collapsed={status !== "entered"}
                      collapseDelay={1000}
                    />
                    <span
                      className={classNames(
                        "project-summary__index-number",
                        `project-summary__index-number--${status}`
                      )}
                    >
                      {about.music.musicHeading}
                    </span>
                  </div>

                  <Heading
                    level={3}
                    as="h2"
                    className={classNames(
                      "project-summary__title",
                      `project-summary__title--${status}`
                    )}
                    id={"AD"}
                  >
                    {about.music.musicTitle}
                  </Heading>
                  <Text
                    className={classNames(
                      "project-summary__description",
                      `project-summary__description--${status}`
                    )}
                    size="l"
                  >
                    {about.music.musicText}
                  </Text>
                </div>
              )}
            </Transition>
          </Col>
          <Col xs="12" lg="6" xl="7">
            <App />
          </Col>
        </Row>
        <div
          className="mb-4"
          style={{
            textAlign: "center",
          }}
        >
          {about.music.musicTextFooter}
        </div>
      </Container>
    </div>
  );
}
