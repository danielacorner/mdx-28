import React, { useState } from "react";

import { ControlledEditor } from "@monaco-editor/react";
import styled from "styled-components/macro";
import { Switch, Button } from "@material-ui/core";

const AppStyles = styled.div`
  .controls {
    position: relative;
    height: 42px;
    display: flex;
    margin: 0.5em;
    align-items: center;
    justify-content: space-around;
  }
  .buildBtn {
  }
  .themeSwitch {
  }
`;

export default () => {
  const [value, setValue] = useState("// try to write e%v%a%l somewhere 😈 \n");
  const [isLightTheme, setIsLightTheme] = useState(false);

  const handleEditorChange = (ev, value) => {
    setValue(value);
  };
  const handleBuild = () => {};

  return (
    <AppStyles>
      <div className="controls">
        <div className="themeSwitch">
          Dark <Switch onChange={() => setIsLightTheme(!isLightTheme)} /> Light
        </div>
        <div className="buildBtn">
          <Button variant="contained" color="primary" onClick={handleBuild}>
            Build
          </Button>
        </div>
      </div>
      <ControlledEditor
        value={value}
        onChange={handleEditorChange}
        height="90vh"
        language="markdown"
        theme={isLightTheme ? "light" : "dark"}
      />
    </AppStyles>
  );
};
