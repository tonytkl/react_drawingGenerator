import { Stage, Layer, Rect, Arrow, Line, Text, Group } from "react-konva";
import { ScreenConfig } from "../../type/screenConfig";

type Props = {
  selectedConfig: ScreenConfig;
};
export const HorizontalDrawing = ({ selectedConfig }: Props) => {
  const screenWidth = 500;
  const screenHeight = 350;
  const screenX = 240;
  const screenY = 160;

  const mountWidth = screenWidth - 40;
  const mountHeight = screenHeight - 40;
  const mountX = screenX + 20;
  const mountY = screenY + 20;

  const axisOffset = 80;
  const dimensionOffset = 5;
  const groundDimensionOffset = 100;

  const dimensionLength = 50;

  return (
    <Stage width={980} height={950}>
      <Layer>
        {/* Screen */}
        <Rect
          width={screenWidth}
          height={screenHeight}
          stroke={"black"}
          strokeWidth={1}
          x={screenX}
          y={screenY}
        />
        {/* Mount */}
        <Rect
          width={mountWidth}
          height={mountHeight}
          stroke={"black"}
          strokeWidth={5}
          x={mountX}
          y={mountY}
        />
        {/* Inner Rectangle */}
        <Rect
          width={screenWidth - 120}
          height={screenHeight - 120}
          stroke={"black"}
          strokeWidth={1}
          dash={[20, 20]}
          x={screenX + 60}
          y={screenY + 60}
        />
        {/* Y axis */}
        <Line
          points={[
            490,
            screenHeight + screenY + axisOffset,
            490,
            screenY - axisOffset,
          ]}
          stroke={"gray"}
          strokeWidth={1}
          dash={[10, 10]}
        />
        {/* X axis */}
        <Line
          points={[
            screenWidth + screenX + axisOffset,
            screenY + screenHeight / 2,
            screenX - axisOffset - 50,
            screenY + screenHeight / 2,
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
                screenX - dimensionOffset,
                screenY,
                screenX - dimensionOffset - dimensionLength,
                screenY,
              ]}
              stroke={"black"}
              strokeWidth={1}
            />
            <Line
              points={[
                screenX - dimensionOffset,
                screenY + screenHeight,
                screenX - dimensionOffset - dimensionLength,
                screenY + screenHeight,
              ]}
              stroke={"black"}
              strokeWidth={1}
            />
            <Arrow
              points={[
                screenX - dimensionLength,
                screenY + dimensionOffset,
                screenX - dimensionLength,
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
                  ? selectedConfig.screen?.height.toString() + '"'
                  : ""
              }
              x={screenX - dimensionOffset - dimensionLength - 70}
              y={screenY + screenHeight / 2 - 40}
              fontSize={20}
              fontStyle="bold"
            />
            {/* Screen width */}
            <Line
              points={[
                screenX,
                screenY - dimensionOffset,
                screenX,
                screenY - dimensionOffset - dimensionLength,
              ]}
              stroke={"black"}
              strokeWidth={1}
            />
            <Line
              points={[
                screenX + screenWidth,
                screenY - dimensionOffset,
                screenX + screenWidth,
                screenY - dimensionOffset - dimensionLength,
              ]}
              stroke={"black"}
              strokeWidth={1}
            />
            <Arrow
              points={[
                screenX,
                screenY - dimensionLength + dimensionOffset,
                screenX + screenWidth,
                screenY - dimensionLength + dimensionOffset,
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
              x={screenX + screenWidth / 2 + 20}
              y={screenY - dimensionLength - 20}
              fontSize={20}
              fontStyle="bold"
            />
          </Group>
        )}
        {/* Mount Dimension */}
        {selectedConfig.mount && (
          <Group>
            {/* Mount height */}
            <Line
              points={[
                screenX + screenWidth + dimensionOffset,
                mountY,
                screenX + screenWidth + dimensionOffset + dimensionLength,
                mountY,
              ]}
              stroke={"black"}
              strokeWidth={1}
            />
            <Line
              points={[
                screenX + screenWidth + dimensionOffset,
                mountY + mountHeight,
                screenX + screenWidth + dimensionOffset + dimensionLength,
                mountY + mountHeight,
              ]}
              stroke={"black"}
              strokeWidth={1}
            />
            <Arrow
              points={[
                screenX + screenWidth + dimensionLength,
                mountY + dimensionOffset,
                screenX + screenWidth + dimensionLength,
                mountY + mountHeight - dimensionOffset,
              ]}
              stroke={"black"}
              strokeWidth={1}
              pointerAtBeginning={true}
              fill={"black"}
            />
            <Text
              text={
                selectedConfig.mount
                  ? selectedConfig.mount?.height.toString() + '"'
                  : ""
              }
              x={screenX + screenWidth + dimensionLength + 20}
              y={screenY + screenHeight / 2 - 40}
              fontSize={20}
              fontStyle="bold"
            />

            {/* Mount width */}
            <Line
              points={[
                mountX,
                screenY + screenHeight + dimensionOffset,
                mountX,
                screenY + screenHeight + dimensionOffset + dimensionLength,
              ]}
              stroke={"black"}
              strokeWidth={1}
            />
            <Line
              points={[
                mountX + mountWidth,
                screenY + screenHeight + dimensionOffset,
                mountX + mountWidth,
                screenY + screenHeight + dimensionOffset + dimensionLength,
              ]}
              stroke={"black"}
              strokeWidth={1}
            />
            <Arrow
              points={[
                mountX,
                screenY + screenHeight + dimensionLength - dimensionOffset,
                mountX + mountWidth,
                screenY + screenHeight + dimensionLength - dimensionOffset,
              ]}
              stroke={"black"}
              strokeWidth={1}
              pointerAtBeginning={true}
              fill={"black"}
            />
            <Text
              text={
                selectedConfig.mount
                  ? selectedConfig.mount?.width.toString() + '"'
                  : ""
              }
              x={screenX + screenWidth / 2 + 20}
              y={screenY + screenHeight + dimensionLength + 10}
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
                screenX - 120,
                screenY + screenHeight + 300,
                screenX + screenWidth + 100,
                screenY + screenHeight + 300,
              ]}
              stroke={"black"}
              strokeWidth={1}
            />
            <Arrow
              points={[
                screenX - groundDimensionOffset,
                screenY + screenHeight / 2,
                screenX - groundDimensionOffset,
                screenY + screenHeight + 300,
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
              x={screenX - groundDimensionOffset - 100}
              y={screenY + screenHeight + dimensionLength + 10}
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
