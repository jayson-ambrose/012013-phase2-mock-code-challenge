import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, search}) {

  const renderedPlants = plants.filter((plant)=> plant.name.toLowerCase().includes(search.toLowerCase())).map((plant) => <PlantCard key={plant.id} plant={plant}/> )

  return (
    <ul className="cards">{renderedPlants}</ul>
  );
}

export default PlantList;
