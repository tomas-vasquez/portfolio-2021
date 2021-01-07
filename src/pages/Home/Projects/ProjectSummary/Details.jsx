import classNames from "classnames";
import { Button } from "components/Button";
import Divider from "components/Divider";
import Heading from "components/Heading";
import Text from "components/Text";
import { Col } from "reactstrap";

export default function Details({
  indexText,
  titleId,
  title,
  description,
  status,
  buttonText,
  buttonLink,
}) {
  return (
    <Col
      md="12"
      lg="6"
      className="d-flex order-2 order-lg-0 mb-5 mt--5 mt-md-0"
    >
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
            {indexText}
          </span>
        </div>

        <Heading
          level={3}
          as="h2"
          className={classNames(
            "project-summary__title",
            `project-summary__title--${status}`
          )}
          id={titleId}
        >
          {title}
        </Heading>
        <Text
          className={classNames(
            "project-summary__description",
            `project-summary__description--${status}`
          )}
        >
          {description}
        </Text>
        <div
          className={classNames(
            "project-summary__button",
            `project-summary__button--${status}`
          )}
        >
          <Button iconHoverShift href={buttonLink} iconEnd="arrowRight">
            {buttonText}
          </Button>
        </div>
      </div>
    </Col>
  );
}
