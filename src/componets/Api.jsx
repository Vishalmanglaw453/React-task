import React from "react";
import { useEffect, useState } from "react";

const Api = () => {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/50")
      .then((response) => response.json())
      .then((data) => setPhoto(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      {
        <div className=" d-flex flex-wrap">
          {photo &&
            photo.map((productImages) => (
              <div style={{ margin: "10px", textAlign: "center" }}>
                <img
                  src={productImages}
                  alt="product-image"
                  style={{ width: "150px", height: "150px" }}
                />
              </div>
            ))}
        </div>
      }
    </div>
  );
};

export default Api;
