import { Stage, Layer, Rect, Arrow, Line, Text, Group } from "react-konva";
import { ScreenConfig } from "../../type/screenConfig";

/**
 * Custom component for displaying the vertical drawing.
 * @param selectedConfig - The selected configuration of the screen.
 */

type Props = {
  selectedConfig: ScreenConfig;
};
export const VerticalDrawing = ({ selectedConfig }: Props) => {
  // All dimensions are based on the screen of 1920 x 1080
  const extScreenHeight = 450;
  const extScreenWidth = 300;
  const extScreenY = 150;
  const extScreenX = 315;

  const screenWidth = extScreenWidth - 40;
  const screenHeight = extScreenHeight - 40;
  const screenX = extScreenX + 20;
  const screenY = extScreenY + 20;

  const axisOffset = 80;
  const dimensionOffset = 5;
  const groundDimensionOffset = 100;

  const dimensionLength = 50;

  return (
    // Stage size is based on the screen of 1920 x 1080
    <Stage width={980} height={800}>
      <Layer>
        {/* Screen */}
        <Rect
          width={extScreenWidth}
          height={extScreenHeight}
          stroke={"black"}
          strokeWidth={1}
          x={extScreenX}
          y={extScreenY}
        />
        {/* Mount */}
        <Rect
          width={screenWidth}
          height={screenHeight}
          stroke={"black"}
          strokeWidth={5}
          x={screenX}
          y={screenY}
        />
        {/* Inner Rectangle */}
        <Rect
          width={extScreenWidth - 120}
          height={extScreenHeight - 120}
          stroke={"black"}
          strokeWidth={1}
          dash={[20, 20]}
          x={extScreenX + 60}
          y={extScreenY + 60}
        />
        {/* Y axis */}
        <Line
          points={[
            extScreenWidth / 2 + extScreenX,
            extScreenHeight + extScreenY + axisOffset,
            extScreenWidth / 2 + extScreenX,
            extScreenY - axisOffset,
          ]}
          stroke={"gray"}
          strokeWidth={1}
          dash={[10, 10]}
        />
        {/* X axis */}
        <Line
          points={[
            extScreenWidth + extScreenX + axisOffset,
            extScreenY + extScreenHeight / 2,
            extScreenX - axisOffset - 50,
            extScreenY + extScreenHeight / 2,
          ]}
          stroke={"gray"}
          strokeWidth={1}
          dash={[10, 10]}
        />
        {/* Screen Dimension */}
        {selectedConfig.screen && (
          <Group>
            {/* Screen height */}
            <Line
              points={[
                extScreenX - dimensionOffset,
                extScreenY,
                extScreenX - dimensionOffset - dimensionLength,
                extScreenY,
              ]}
              stroke={"black"}
              strokeWidth={1}
            />
            <Line
              points={[
                extScreenX - dimensionOffset,
                extScreenY + extScreenHeight,
                extScreenX - dimensionOffset - dimensionLength,
                extScreenY + extScreenHeight,
              ]}
              stroke={"black"}
              strokeWidth={1}
            />
            <Arrow
              points={[
                extScreenX - dimensionLength,
                extScreenY + dimensionOffset,
                extScreenX - dimensionLength,
                extScreenY + extScreenHeight - dimensionOffset,
              ]}
              stroke={"black"}
              strokeWidth={1}
              pointerAtBeginning={true}
              fill={"black"}
            />
            <Text
              text={
                selectedConfig.screen
                  ? (
                      selectedConfig.screen?.width +
                      selectedConfig.screenGap * 2
                    ).toString() + '"'
                  : ""
              }
              x={extScreenX - dimensionOffset - dimensionLength - 70}
              y={extScreenY + extScreenHeight / 2 - 40}
              fontSize={20}
              fontStyle="bold"
            />
            {/* Screen width */}
            <Line
              points={[
                extScreenX,
                extScreenY - dimensionOffset,
                extScreenX,
                extScreenY - dimensionOffset - dimensionLength,
              ]}
              stroke={"black"}
              strokeWidth={1}
            />
            <Line
              points={[
                extScreenX + extScreenWidth,
                extScreenY - dimensionOffset,
                extScreenX + extScreenWidth,
                extScreenY - dimensionOffset - dimensionLength,
              ]}
              stroke={"black"}
              strokeWidth={1}
            />
            <Arrow
              points={[
                extScreenX,
                extScreenY - dimensionLength + dimensionOffset,
                extScreenX + extScreenWidth,
                extScreenY - dimensionLength + dimensionOffset,
              ]}
              stroke={"black"}
              strokeWidth={1}
              pointerAtBeginning={true}
              fill={"black"}
            />
            <Text
              text={
                selectedConfig.screen
                  ? (
                      selectedConfig.screen?.height +
                      selectedConfig.screenGap * 2
                    ).toString() + '"'
                  : ""
              }
              x={extScreenX + extScreenWidth / 2 + 20}
              y={extScreenY - dimensionLength - 20}
              fontSize={20}
              fontStyle="bold"
            />
            {/* Inner screen height */}
            <Line
              points={[
                extScreenX + extScreenWidth + dimensionOffset,
                screenY,
                extScreenX + extScreenWidth + dimensionOffset + dimensionLength,
                screenY,
              ]}
              stroke={"black"}
              strokeWidth={1}
            />
            <Line
              points={[
                extScreenX + extScreenWidth + dimensionOffset,
                screenY + screenHeight,
                extScreenX + extScreenWidth + dimensionOffset + dimensionLength,
                screenY + screenHeight,
              ]}
              stroke={"black"}
              strokeWidth={1}
            />
            <Arrow
              points={[
                extScreenX + extScreenWidth + dimensionLength,
                screenY + dimensionOffset,
                extScreenX + extScreenWidth + dimensionLength,
                screenY + screenHeight - dimensionOffset,
              ]}
              stroke={"black"}
              strokeWidth={1}
              pointerAtBeginning={true}
              fill={"black"}
            />
            <Text
              text={
                selectedConfig.screen
                  ? selectedConfig.screen?.width.toString() + '"'
                  : ""
              }
              x={extScreenX + extScreenWidth + dimensionLength + 20}
              y={extScreenY + extScreenHeight / 2 - 40}
              fontSize={20}
              fontStyle="bold"
            />

            {/* Mount width */}
            <Line
              points={[
                screenX,
                extScreenY + extScreenHeight + dimensionOffset,
                screenX,
                extScreenY +
                  extScreenHeight +
                  dimensionOffset +
                  dimensionLength,
              ]}
              stroke={"black"}
              strokeWidth={1}
            />
            <Line
              points={[
                screenX + screenWidth,
                extScreenY + extScreenHeight + dimensionOffset,
                screenX + screenWidth,
                extScreenY +
                  extScreenHeight +
                  dimensionOffset +
                  dimensionLength,
              ]}
              stroke={"black"}
              strokeWidth={1}
            />
            <Arrow
              points={[
                screenX,
                extScreenY +
                  extScreenHeight +
                  dimensionLength -
                  dimensionOffset,
                screenX + screenWidth,
                extScreenY +
                  extScreenHeight +
                  dimensionLength -
                  dimensionOffset,
              ]}
              stroke={"black"}
              strokeWidth={1}
              pointerAtBeginning={true}
              fill={"black"}
            />
            <Text
              text={
                selectedConfig.screen
                  ? selectedConfig.screen?.height.toString() + '"'
                  : ""
              }
              x={extScreenX + extScreenWidth / 2 + 20}
              y={extScreenY + extScreenHeight + dimensionLength + 10}
              fontSize={20}
              fontStyle="bold"
            />
          </Group>
        )}

        {/* Floor line */}
        {selectedConfig.floorDistance && (
          <Group>
            <Line
              points={[
                extScreenX - 120,
                extScreenY + extScreenHeight + 200,
                extScreenX + extScreenWidth + 100,
                extScreenY + extScreenHeight + 200,
              ]}
              stroke={"black"}
              strokeWidth={1}
            />
            <Arrow
              points={[
                extScreenX - groundDimensionOffset,
                extScreenY + extScreenHeight / 2,
                extScreenX - groundDimensionOffset,
                extScreenY + extScreenHeight + 200,
              ]}
              stroke={"black"}
              strokeWidth={1}
              pointerAtBeginning={true}
              fill={"black"}
            />
            <Text
              text={
                selectedConfig.floorDistance
                  ? selectedConfig.floorDistance.toString() +
                    '"' +
                    "\nFloor\nDistance"
                  : ""
              }
              x={extScreenX - groundDimensionOffset - 100}
              y={extScreenY + extScreenHeight - 20}
              fontSize={20}
              fontStyle="bold"
              align="right"
            />
          </Group>
        )}
      </Layer>
    </Stage>
  );
};
