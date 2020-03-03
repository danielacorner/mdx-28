import React, { useState } from "react";

import { ControlledEditor } from "@monaco-editor/react";
import styled from "styled-components/macro";
import { Switch, Button } from "@material-ui/core";
import useReactRouter from "use-react-router";
// import qs from "query-string";

const CONTROLS_HEIGHT = 42;
const AppStyles = styled.div`
  * {
    box-sizing: border-box;
  }
  .controls {
    position: relative;
    height: ${CONTROLS_HEIGHT}px;
    display: flex;
    padding: 0.5em;
    align-items: center;
    justify-content: space-around;
  }
  .buildBtn {
  }
  .themeSwitch {
  }
`;

export default () => {
  // const parsed = qs.parse(window.location.search);
  const { location, history } = useReactRouter();
  // console.log("⚡🚨: parsed", parsed);
  const [value, setValue] = useState(decodeURI(location.search.slice(1))); // slice off the question mark
  console.log("⚡🚨: location", location.search);
  const [isLightTheme, setIsLightTheme] = useState(false);

  const handleEditorChange = (ev, value) => {
    setValue(value);
    history.push(`/?${encodeURI(value)}`);
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
        height={`calc(100vh - ${CONTROLS_HEIGHT}px)`}
        language="markdown"
        theme={isLightTheme ? "light" : "dark"}
        options={{ wordWrap: "on" }}
      />
    </AppStyles>
  );
};
