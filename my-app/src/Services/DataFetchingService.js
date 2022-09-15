import React, {useState, useEffect} from "react";
import axios from "axios";
import "./DataFetchingService"
import "./DataFetching.css"

let m = "";
let Delete = "Add to Favorite";


export function SearchSet(setQ, searchType, isFavorite = false) {

    if(!isFavorite){
        m = setQ;
    }
    else{
        m = "_favourite" 
    }

}

export function TestAgain(contentID, title, description, premiereDate, img) {
    console.log(Delete);
    if (Delete == "Delete game"){
        axios.delete(`https://localhost:7248/api/content/${contentID}`);
    }
    // To do: fix later
    else if (Delete == "Add to Favorite"){
        if(!title.includes("_favourite")){
        const json = JSON.stringify({ 
            "title": title + "_favourite",
            "description": description,
            "premiereDate": premiereDate,
            "img": img
           });
        console.log(json)
        axios.put(`https://localhost:7248/api/content/${contentID}`, json, {
            headers: {
              // Overwrite Axios's automatically set Content-Type
              'Content-Type': 'application/json'
            }
          })
    }
    else{
        const json = JSON.stringify({ 
            "title": title.substr(0, title.length - "_favourite".length),
            "description": description,
            "premiereDate": premiereDate,
            "img": img
           });

        console.log(json)
        axios.put(`https://localhost:7248/api/content/${contentID}`, json, {
            headers: {
              // Overwrite Axios's automatically set Content-Type
              'Content-Type': 'application/json'
            }
          })
    }
}
}

export function DeleteSet() {
    if (Delete == "Add to Favorite"){
        Delete = "Delete game";
    }
    else if (Delete == "Delete game"){
        Delete = "Add to Favorite";
    }
    console.log(Delete);
}

function DataFetchingService() {
const [posts, setPosts] = useState([])
let doubled;


const [q, setQ] = useState("");  
const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        axios.get('https://localhost:7248/api/content')
        .then(res => {
            doubled = res.data.map((res) => res.premiereDate);
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })  

    })


    return(
        <div className="wrapper">
             {posts.filter(post => post.title.toLowerCase().indexOf(m.toLowerCase()) > -1).
             map(post => (
                <div id={post.contentID} className="card" key={post.contentID} >
                    <div className="card__body">
                    
                        <img src ={require(`../images/${post.img}`)} className="card__image" />
                        <hr/>
                        <h4 className="card__title">{post.title.includes("_favourite")? post.title.substr(0, post.title.length - "_favourite".length) : post.title}</h4>
                        <h6 className="card__description">Release date: {post.premiereDate}</h6>
                        
                        <p className="card__description">{post.description}</p>
                    </div>
                    
                    <button className="card__btn" id="CardMainBtn" onClick={() => { TestAgain(post.contentID, post.title, post.description, post.premiereDate, post.img) }}>{Delete}</button>
                    </div>
                            
    ))}

                 </div>
    )
}


export default DataFetchingService;