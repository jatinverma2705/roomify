import React from "react";
import { useParams } from "react-router";

const Visualizer = () => {
  const { id } = useParams();

  return <div>Visualizer - {id}</div>;
};

export default Visualizer;
