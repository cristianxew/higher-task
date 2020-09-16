import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import "./photos.scss";

const Photos = ({ listOfPhotos, handleUrl }) => {
  const [size, setSize] = useState(3);

  const imageCounter = listOfPhotos.slice(0, size);

  const images = imageCounter.map((item) => {
    const { url, id, author, download_url } = item;
    const index = url.lastIndexOf("/");
    const slug = url.substr(index);
    return (
      <div key={id} className="img-overlay">
        <img
          alt={`By ${author}`}
          src={`http://source.unsplash.com${slug}`}
        ></img>
        <div className="img-footer">
          <span>{`Author: ${author}`}</span>
          <a target="_blank" rel="noopener noreferrer" href={download_url}>
            <FaDownload className="icon" />
          </a>
        </div>
      </div>
    );
  });

  const handleSize = () => {
    setSize(size + 3);
  };

  if (size >= 30) {
    setSize(3);
    handleUrl(size);
  }

  return (
    <>
      <div className="photos-container">{images}</div>
      <div className="button-container">
        <button onClick={handleSize}>Next</button>
      </div>
    </>
  );
};

export default Photos;
