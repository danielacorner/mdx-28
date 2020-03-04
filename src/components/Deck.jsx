import React from "react";
import useReactRouter from "use-react-router";

export default () => {
  const { match } = useReactRouter();
  console.log("🌟🚨: match", match);
  return <div>HELLOOOO</div>;
};
