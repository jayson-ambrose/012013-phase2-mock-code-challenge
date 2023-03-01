import React from "react";

function NewPlantForm({formVals, handleFormVals, handleSubmit}) {
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={() => handleSubmit(formVals)}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          value={formVals.name}
          onChange={handleFormVals}
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={formVals.image}
          onChange={handleFormVals}
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          value={formVals.value}
          onChange={handleFormVals}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
