import sprTexturePlaceholder from "assets/spr-lesson-builder-dark-placeholder.jpg";
import ProjectSummary from "./ProjectSummary";
import { portfolio } from "config";
import { ProjectSectionHeading } from "components/ProjectLayout";
import { Col, Container, Row } from "reactstrap";
import { portfolio as portafolio } from "config";
import { Transition } from "react-transition-group";
import DecoderText from "components/DecoderText";
import Text from "components/Text";

import classNames from "classnames";
import { useInView } from "react-intersection-observer";

export default function Projects({ id }) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div id={id} ref={ref} className="py-5 project__section--light">
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
                      text={portafolio.portfolioHeading}
                      start={inView}
                      delay={0}
                    />
                  </ProjectSectionHeading>
                  <Text
                    className={classNames(
                      "mb-0",
                      "profile__description",
                      `profile__description--${status}`
                    )}
                    size="l"
                  >
                    {portafolio.portfolioText}
                  </Text>
                </>
              )}
            </Transition>
          </Col>
        </Row>
      </Container>
      {portfolio.deploys.map((site, index) => {
        return (
          <ProjectSummary
            index={index + 1}
            key={index}
            visible={true}
            title={site.title}
            description={site.description}
            buttonText="View project"
            buttonLink={site.linkDemo}
            buttonText2="View source"
            buttonLink2={site.linkRepo}
            model={{
              type: "laptop",
              alt: "Smart Sparrow lesson builder",
              textures: [
                {
                  src: site.image,
                  // srcSet: `${site.image} 800w, ${site.image} 1440w`,
                  placeholder: sprTexturePlaceholder,
                },
              ],
            }}
          />
        );
      })}
    </div>
  );
}
