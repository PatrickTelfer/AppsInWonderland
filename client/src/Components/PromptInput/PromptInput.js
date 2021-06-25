import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Container, FullWidthContainer } from "../Common/Container";
import { Input } from "../Common/Input";
import { Title, SubTitle } from "../Common/Text";
import { Button } from "../Common/Button";
import thinking from "../../Ressources/thinking.gif";
import { SocketContext } from "../../Context/socket";
import { useHistory, useParams, withRouter } from "react-router";
import { Progress } from "../Common/Progress";

const PromptInput = (props) => {
  const state = props.location.state;

  const name = state.name;
  const socket = useContext(SocketContext);
  const [second, setSecond] = useState(30);
  const [submitted, setSubmitted] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [maxSecond, setMaxSecond] = useState(60);
  const history = useHistory();
  const [receivedTimer, setReceivedTimer] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    let isMounted = true;
    if (socket) {
      socket.on("timerUpdateStart", (secondData) => {
        if (isMounted) {
          const { second, maxSecond } = secondData;
          setSecond(second);
          setMaxSecond(maxSecond);
          if (!receivedTimer) {
            setReceivedTimer(true);
          }
        }
      });
      socket.on("timerDoneStart", () => {
        if (isMounted) {
          if (!submitted && prompt !== "") {
            socket.emit("submitPrompt", prompt);
          }
          history.replace({
            pathname: "/DrawingScreen/" + id,
            state: { name },
          });
        }
      });
    }
    return () => {
      isMounted = false;
      socket.removeAllListeners("timerDoneStart");
      socket.removeAllListeners("timerUpdateStart");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, socket, submitted, prompt]);
  return (
    <FullWidthContainer>
      <Container>
        <Title>Enter a drawing prompt</Title>
        <Spinning src={thinking} alt="loading..." />

        {receivedTimer && <Progress value={second} max={maxSecond} />}
        {!submitted && (
          <>
            <StyledInput
              placeholder="Input a suggestion!"
              onChange={(e) => {
                setPrompt(e.target.value);
              }}
            ></StyledInput>
            <Button
              onClick={() => {
                if (prompt !== "") {
                  setSubmitted(true);
                  socket.emit("submitPrompt", prompt);
                }
              }}
            >
              Submit
            </Button>
          </>
        )}
        {submitted && (
          <SubTitle style={{ marginTop: "auto" }}>
            Thank your for your submission. Waiting for others to submit
          </SubTitle>
        )}
      </Container>
    </FullWidthContainer>
  );
};

const StyledInput = styled(Input)`
  margin-top: auto;
`;

const Spinning = styled.img`
  max-width: 100px;
`;
export default withRouter(PromptInput);
