import React from "react";
import "./PopUpAddGame.css"
import axios from "axios";

 
const Popup = props => {


  const handleSubmit = async (e) => {
    e.preventDefault();

    const Realesed=e.target.Realesed.value;
    const Image = e.target.Image.files[0].name;
    const Title=e.target.Title.value;
    const Description=e.target.Description.value;

    const json = JSON.stringify({ 
    "title": Title,
    "description": Description,
    "rate": 5,
    "premiereDate": Realesed,
    "img": Image
   });
   console.log(json)
    
    axios.post('https://localhost:7248/api/content', json, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
      }
    })


    console.log(Title);
        console.log(Image);
        console.log(Realesed);
        console.log(Description);
  }

  return (
    <div className="popup-box">
      <div className="box">
      <h5>Here you can add new game</h5>
      <br/>
        <div className='parent'>
        <form onSubmit={handleSubmit}>
        <div className='child'>
        <h6>Title</h6>
        <input type="text" className="TitleInput" name="Title"/>
        <h6>Description</h6>
      <input type="text" className="TitleDescription" name="Description"/>
        </div>
        <div className='child'>
        <h6>Released year</h6>
        <input type="text" className="TitleReleased" name="Realesed"/>
        <h6>Image</h6>
        <input type="file" className="TitleImage" name="Image"/>
        </div>
        <button className="add-game_btn">Add game</button>
        </form>
      </div>
      </div>
      


      </div>
  );
};
 
export default Popup;