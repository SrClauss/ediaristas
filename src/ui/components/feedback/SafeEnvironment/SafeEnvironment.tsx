import React from "react";
import { SafeEnvironmentContainer } from "./SafeEnvironment.style";
import { Container } from "@mui/material";

const SafeInvironment = () => {
  return (
    <div>
      <Container>
        <SafeEnvironmentContainer>
          Ambiente Seguro <i className={"twf-lock"} />
        </SafeEnvironmentContainer>
      </Container>
    </div>
  );
};

export default SafeInvironment;
