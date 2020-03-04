import React, {useState, UseEffect, useEffect} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

// import PhotoCard from "./PhotoCard";

function NasaList () {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=3fJZEhZ3Wq6Oj3jICuijfYwwP17t4Ts3PMf5jvqx&date=2012-03-14`)
        .then(response => {
          console.log(response.data);
          setPhotos(response.data);
        })
}, []);


    return (
        <div>
            <PhotoCard 
            id={photos.id}
            copyright={photos.copyright}
            title={photos.title}
            explanation={photos.explanation}
            />
            <img src={photos.hdurl} alt="apod"></img>
        </div>
    );
}

export default NasaList;