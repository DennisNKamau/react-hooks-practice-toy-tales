import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys}) {
  const toycards=toys.map((toy)=>(
    <ToyCard key={toy.id}
    toy={toy}/>
  ))
  return (
    <div id="toy-collection">{toycards}</div>
  );
}

export default ToyContainer;
