import React, { forwardRef, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaEraser, FaPencilAlt, FaTrash } from "react-icons/fa";
import { Button } from "../Common/Button";
import { IconButton, HStack, Flex } from "@chakra-ui/react";

const Canvas = forwardRef((props, ref) => {
  if (!ref) {
    throw new Error("parent must provide canvas ref");
  }

  let canvasRef = ref;

  const containerRef = useRef(null);
  const [ctx, setCtx] = useState(null);
  const [currentX, setCurrentX] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isDrawingToolSelected, setIsDrawingToolSelected] = useState(true);
  const [currentColor, setCurrentColor] = useState();

  useEffect(() => {
    const canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");
    setCtx(ctx);
    ctx.canvas.width = 300;
    ctx.canvas.height = 420;
    setCurrentColor("#000000");
  }, [ctx]);

  const drawLine = function (x, y, color) {
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = 3;
    if (!isDrawingToolSelected) {
      ctx.strokeStyle = "#f2f2f2";
      ctx.lineWidth = 30;
    }
    ctx.beginPath();
    ctx.moveTo(currentX, currentY);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();
  };

  const clearCanvas = function () {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  };
  return (
    <Flex ref={containerRef} p="2" flexDirection="column" alignItems="center">
      <Flex
        bg="purple.100"
        p="2"
        borderRadius="lg"
        justifyContent="space-around"
        width="3xs"
        mb={4}
      >
        <IconButton
          colorScheme="purple"
          disabled={!isDrawingToolSelected}
          aria-label="Eraser"
          icon={<FaEraser />}
          onClick={() => {
            setIsDrawingToolSelected(!isDrawingToolSelected);
          }}
        ></IconButton>
        <IconButton
          colorScheme="purple"
          aria-label="Draw"
          disabled={isDrawingToolSelected}
          icon={<FaPencilAlt />}
          onClick={() => {
            setIsDrawingToolSelected(!isDrawingToolSelected);
          }}
        ></IconButton>
        <IconButton
          colorScheme="purple"
          aria-label="Trash"
          icon={<FaTrash />}
          onClick={clearCanvas}
        ></IconButton>
      </Flex>
      {/* <Toolbar>
        <ColorPicker
          type="color"
          onChange={(e) => {
            setCurrentColor(e.target.value);
          }}
        />
        <ToolbarButton
          disabled={!isDrawingToolSelected}
          onClick={() => {
            setIsDrawingToolSelected(!isDrawingToolSelected);
          }}
        >
          <FaEraser />
        </ToolbarButton>

        <ToolbarButton
          disabled={isDrawingToolSelected}
          onClick={() => {
            setIsDrawingToolSelected(!isDrawingToolSelected);
          }}
        >
          <FaPencilAlt />
        </ToolbarButton>
        <TrashButton onClick={clearCanvas}>
          <FaTrash />
        </TrashButton>
      </Toolbar> */}
      <canvas
        style={{
          backgroundColor: "#f2f2f2",
          touchAction: "none",
          boxShadow: "2px 2px 2px 1px rgb(0 0 0 / 20%)",
        }}
        ref={canvasRef}
        onTouchStart={(e) => {
          let coords = convert(e, ctx.canvas);
          setCurrentX(coords.x);
          setCurrentY(coords.y);
          setIsDrawing(true);
        }}
        onTouchEnd={(e) => {
          if (!isDrawing) {
            return;
          }
          let coords = convert(e, ctx.canvas);
          drawLine(coords.x, coords.y);
          setIsDrawing(false);
        }}
        onTouchMove={(e) => {
          if (!isDrawing) {
            return;
          }
          let coords = convert(e, ctx.canvas);
          drawLine(coords.x, coords.y);
          setCurrentX(coords.x);
          setCurrentY(coords.y);
        }}
        onMouseDown={(e) => {
          setIsDrawing(true);
          setCurrentX(e.nativeEvent.offsetX);
          setCurrentY(e.nativeEvent.offsetY);
        }}
        onMouseUp={(e) => {
          if (!isDrawing) {
            return;
          }
          drawLine(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          setIsDrawing(false);
        }}
        onMouseMove={(e) => {
          if (!isDrawing) {
            return;
          }
          drawLine(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          setCurrentX(e.nativeEvent.offsetX);
          setCurrentY(e.nativeEvent.offsetY);
        }}
        onMouseLeave={(e) => {
          setIsDrawing(false);
        }}
      ></canvas>
    </Flex>
  );
});

const convert = (e, canvas) => {
  return {
    x: e.changedTouches[0].pageX - canvas.offsetLeft,
    y: e.changedTouches[0].pageY - canvas.offsetTop,
  };
};

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const StyledCanvas = styled.canvas`
  background-color: #f2f2f2;
  touch-action: none;
  box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);
`;

export default Canvas;
