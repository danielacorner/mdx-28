import React from "react";
import useReactRouter from "use-react-router";

export default () => {
  const { match } = useReactRouter();
  const deckData = match.params.deckData;
  const decodedDeckData = decodeURI(deckData);

  return <div>{decodedDeckData}</div>;
};
