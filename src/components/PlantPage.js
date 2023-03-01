import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])  
  const [search, setSearch] = useState ("")
  const [formVals, setFormVals] = useState ({
    name: "",
    image: "",
    price: 0
  })


  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(resp => resp.json())
    .then(data => setPlants(data))
  }, [])

  const handleSearch = (e) => {
    setSearch(e.target.value)
    
  }

  const handleFormVals = (e) => {
    const {name, value} = e.target

    setFormVals(
      {...formVals, [name]: value}
    )
  }

  const handleSubmit = (object) => {
    
    fetch("http://localhost:6001/plants", {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(object)      
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  return (
    <main>
      <NewPlantForm formVals={formVals} handleFormVals={handleFormVals} handleSubmit={handleSubmit} />
      <Search search={search} handleSearch={handleSearch}/>
      <PlantList plants={plants} search={search}/>
    </main>
  );
}

export default PlantPage;
