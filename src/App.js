import React, { useEffect, useState } from "react";
import Photos from "./components/Photos";
import Navbar from "./components/NavBar";
import "./main.scss";

const App = () => {
  const [listOfPhotos, setListOfPhotos] = useState({});
  const [urlPage, setUrlPage] = useState(1);
  const url = `https://picsum.photos/v2/list?page=${urlPage}&limit=30`;

  useEffect(() => {
    const getListOfPhotos = async () => {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setListOfPhotos(data);
        });
    };

    getListOfPhotos();
  }, [url]);

  const handleUrl = (size) => {
    if (size >= 30) {
      setUrlPage(urlPage + 1);
    }
  };

  return (
    <>
      <Navbar />
      <main className="main-container">
        {listOfPhotos.length > 0 && (
          <Photos handleUrl={handleUrl} listOfPhotos={listOfPhotos} />
        )}
      </main>
    </>
  );
};

export default App;
