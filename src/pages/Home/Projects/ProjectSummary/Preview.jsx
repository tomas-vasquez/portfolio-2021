import Model from "components/Model";
import classNames from "classnames";
import { media } from "utils/style";
import deviceModels from "components/Model/deviceModels";
import { Col } from "reactstrap";

const phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`;
const laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;

export default function Preview({ model, index, status, isVisible }) {
  return (
    <Col md="12" lg="6" className="order-1 order-lg-0">
      {model.type === "laptop" && (
        <>
          <Model
            index={index}
            className={classNames(
              "project-summary__model",
              "project-summary__model--laptop"
            )}
            alt={model.alt}
            cameraPosition={{ x: 0, y: 0, z: 8 }}
            showDelay={0}
            show={isVisible(status)}
            models={[
              {
                ...deviceModels.laptop,
                texture: {
                  ...model.textures[0],
                  sizes: laptopSizes,
                },
              },
            ]}
          />
        </>
      )}

      {model.type === "phone" && (
        <>
          <Model
            className={classNames(
              "project-summary__model",
              "project-summary__model--phone"
            )}
            alt={model.alt}
            cameraPosition={{ x: 0, y: 0, z: 11.5 }}
            showDelay={0}
            show={isVisible(status)}
            models={[
              {
                ...deviceModels.phone,
                position: { x: -0.6, y: 1.1, z: 0 },
                texture: {
                  ...model.textures[0],
                  sizes: phoneSizes,
                },
              },
              {
                ...deviceModels.phone,
                position: { x: 0.6, y: -0.5, z: 0.3 },
                texture: {
                  ...model.textures[1],
                  sizes: phoneSizes,
                },
              },
            ]}
          />
        </>
      )}
    </Col>
  );
}
