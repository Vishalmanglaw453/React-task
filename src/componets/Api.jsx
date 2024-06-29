import React from "react";
import React, { useEffect, useState } from "react";
const Api = () => {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/50")
      .then((response) => response.json())
      .then((data) => setPhoto(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="App">
      {dogImage &&
        dogImage.map((dog) => (
          <img width={"200px"} height={"200px"} src={dog}></img>
        ))}
    </div>
  );
};

export default Api;
