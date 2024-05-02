import React,{useState} from "react";
import axios from "axios";
function ToyForm() {
  const [formData,setForm]=useState({
    name:"",
    image:""
  })
  function handlChange(event){
    setformData({
      [event.target.name]:event.target.value
  })
  }
  function handlesubmit(e){
    e.preventDefault()
    const newToy={
      ...formData,
      likes:0
    }
    axios.post("http://localhost:3001/toys".newToy)
    .then((res)=>addaToy(res.data))
  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handlesubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          onChange={handlChange}
          value={formData.name}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          onChange={handlChange}
          value={formData.image}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
