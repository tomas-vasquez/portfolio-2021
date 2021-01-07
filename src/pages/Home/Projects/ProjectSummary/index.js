import { Transition } from "react-transition-group";
import { reflow, isVisible } from "utils/transition";

import "./ProjectSummary.css";

import Details from "./Details";
import Preview from "./Preview";
import { Container, Row } from "reactstrap";

import { useInView } from "react-intersection-observer";

const ProjectSummary = ({
  id,
  visible,
  sectionRef,
  index,
  title,
  description,
  model,
  buttonText,
  buttonLink,
  alternate,
  ...rest
}) => {
  const titleId = `${id}-title`;
  const indexText = index < 10 ? `0${index}` : index;

  const renderDetails = (status) => (
    <Details
      indexText={indexText}
      titleId={titleId}
      title={title}
      description={description}
      status={status}
      buttonText={buttonText}
      buttonLink={buttonLink}
    />
  );
  const renderPreview = (status) => (
    <Preview
      model={model}
      index={index}
      status={status}
      isVisible={isVisible}
    />
  );

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      className="section mt--5 "
      as="section"
      aria-labelledby={titleId}
      ref={ref}
      id={id}
      tabIndex={-1}
      {...rest}
    >
      <Container>
        <Transition in={inView} timeout={0} onEnter={reflow}>
          {(status) => (
            <Row>
              {index % 2 === 0 && (
                <>
                  {renderDetails(status)}
                  {renderPreview(status)}
                </>
              )}
              {index % 2 !== 0 && (
                <>
                  {renderPreview(status)}
                  {renderDetails(status)}
                </>
              )}
            </Row>
          )}
        </Transition>
      </Container>
    </div>
  );
};

export default ProjectSummary;
