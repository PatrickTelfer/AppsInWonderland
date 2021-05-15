import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Canvas = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [ctx, setCtx] = useState(null);
  const [currentX, setCurrentX] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(0);
  const threshHold = 20;

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
    const height = containerRef.current.offsetHeight;
    const width = containerRef.current.offsetWidth;
    let ctx = canvas.getContext("2d");
    setCtx(ctx);
    setCurrentWidth(width);
    ctx.canvas.width = width - 50;
    ctx.canvas.height = height - 100;
  }, [ctx]);

  const drawLine = function (x, y, color) {
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(currentX, currentY);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();
  };
  return (
    <CanvasContainer ref={containerRef}>
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
      ></StyledCanvas>
    </CanvasContainer>
  );
};

const convert = (e, canvas) => {
  return {
    x: e.changedTouches[0].pageX - canvas.offsetLeft,
    y: e.changedTouches[0].pageY - canvas.offsetTop,
  };
};

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCanvas = styled.canvas`
  background-color: #f2f2f2;
  touch-action: none;
`;

export default Canvas;
