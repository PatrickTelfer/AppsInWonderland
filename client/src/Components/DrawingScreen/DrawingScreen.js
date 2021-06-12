import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Canvas from "../Canvas/Canvas";
import { Button } from "../Common/Button";
import { Container, FullWidthContainer } from "../Common/Container";
import { Title, SubTitle } from "../Common/Text";
import { SocketContext } from "../../Context/socket";
import { useHistory, useParams, withRouter } from "react-router";
import { Progress } from "../Common/Progress";

const DrawingScreen = (props) => {
  const socket = useContext(SocketContext);
  const [prompt, setPrompt] = useState("");
  const history = useHistory();
  const [second, setSecond] = useState(30);
  const [receivedTimer, setReceivedTimer] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const canvasRef = useRef();
  const { id } = useParams();

  const state = props.location.state;
  const name = state.name;

  useEffect(() => {
    if (socket) {
      socket.emit("requestingPrompt");
      socket.emit("startTimer");
    }
  }, [socket]);

  useEffect(() => {
    let isMounted = true;
    if (socket && isMounted) {
      socket.on("sendingPrompt", (prompt) => {
        if (isMounted) {
          setPrompt(prompt);
        }
      });
      socket.on("gameOver", () => {
        if (isMounted) {
          history.replace("/");
        }
      });

      socket.on("timerUpdate", (second) => {
        if (isMounted) {
          setSecond(second);
          if (!receivedTimer) {
            setReceivedTimer(true);
          }
        }
      });
      socket.on("timerDone", () => {
        if (isMounted) {
          // if (!isSubmitted) {
          //   const dataURL = canvasRef.current.toDataURL();
          //   const imageData = {
          //     name,
          //     dataURL,
          //   };
          //   socket.emit("submittingImage", imageData);
          // }

          history.replace({
            pathname: "/Voting/" + id,
            state: { name },
          });
        }
      });
    }
    return () => {
      isMounted = false;
    };
  }, [history, socket]);
  return (
    <FullWidthContainer>
      <DrawingContainer>
        <Title style={{ marginTop: 0 }}>{prompt || "LOADING PROMPT..."}</Title>
        <Progress value={second} max={30} />
        {!isSubmitted && (
          <>
            <Canvas ref={canvasRef} />
            <StyledButton
              onClick={() => {
                setIsSubmitted(true);
                const dataURL = canvasRef.current.toDataURL();
                const imageData = {
                  name,
                  dataURL,
                };
                socket.emit("submittingImage", imageData);
              }}
            >
              Submit
            </StyledButton>
          </>
        )}
        {isSubmitted && (
          <SubTitle>
            Thank you for your submission. Waiting for others.
          </SubTitle>
        )}
      </DrawingContainer>
    </FullWidthContainer>
  );
};

const DrawingContainer = styled(Container)`
  padding: 20px;
  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const StyledButton = styled(Button)`
  padding: 0;
`;

export default withRouter(DrawingScreen);
