import React, { forwardRef, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaEraser, FaPencilAlt, FaTrash } from "react-icons/fa";
import { Button } from "../Common/Button";

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
  const [currentWidth, setCurrentWidth] = useState(0);
  const [isDrawingToolSelected, setIsDrawingToolSelected] = useState(true);
  const [currentColor, setCurrentColor] = useState();

  //   useEffect(() => {
  //     const onResize = (e) => {
  //       const height = containerRef.current.offsetHeight;
  //       const width = containerRef.current.offsetWidth;
  //       if (Math.abs(width - currentWidth) > threshHold) {
  //         ctx.canvas.width = width - 50;
  //         ctx.canvas.height = height - 50;
  //         console.log("hi");
  //         setCurrentWidth(width);
  //       }
  //     };
  //     window.addEventListener("resize", onResize, false);
  //   }, [ctx, currentWidth, containerRef]);

  useEffect(() => {
    const canvas = canvasRef.current;
    // const height = containerRef.current.offsetHeight;
    // const width = containerRef.current.offsetWidth;
    let ctx = canvas.getContext("2d");
    setCtx(ctx);
    // setCurrentWidth(width);
    // ctx.canvas.width = width - 50;
    // ctx.canvas.height = height - 150;
    ctx.canvas.width = 300;
    ctx.canvas.height = 420;
    setCurrentColor("#000000");
  }, [ctx]);

  const drawLine = function (x, y, color) {
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = 1;
    if (!isDrawingToolSelected) {
      ctx.strokeStyle = "#f2f2f2";
      ctx.lineWidth = 20;
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
    <CanvasContainer ref={containerRef}>
      <Toolbar>
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
      </Toolbar>
      <StyledCanvas
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
          e.preventDefault();
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
      ></StyledCanvas>
    </CanvasContainer>
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

const Toolbar = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50%;
  border: 2px solid rgba(164, 53, 170, 0.8);
  margin-bottom: 10px;
  margin-top: 10px;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const ToolbarButton = styled(Button)`
  width: 55px;
  height: 55px;
  margin: 5px;
  cursor: pointer;
  background-color: white;
  padding: 0;
  font-weight: 1em;
`;

const TrashButton = styled(ToolbarButton)`
  &:focus {
    border: 2px solid rgba(164, 53, 170, 0.8);
    color: rgba(164, 53, 194, 0.8);
  }
`;

const ColorPicker = styled.input`
  width: 50px;
  height: 50px;
  margin: 5px;
  cursor: pointer;
  margin-right: auto;
`;

export default Canvas;
