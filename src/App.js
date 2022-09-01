import "./App.css";
import React, { useState} from "react";
import MovieList from "./components/MovieList";
import theGodfatherImg from "./img/The Godfather.jpg";
import fightClubImg from "./img/Fight Club.jpg";
import DriveImg from "./img/Drive.jpg";
import TaxiDriverImg from "./img/TaxiDriver.jpg";
import TheMatrixImg from "./img/The matrix.jpg";
import schindlerImg from "./img/Schindler's List.jpg";
import inceptionImg from "./img/Inception.jpg";
import Se7enImg from "./img/Se7en.jpg";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";
import PageNotFound from "./components/PageNotFound";
import {tabTitle} from "./components/UpdatePageTitle"
function App() {
  const [ntitle, setNtitle] = useState("");
  const [ndescription, setNdescription] = useState("");
  const [nposter, setNposter] = useState("");
  const [ntrailer, setNtrailer] = useState("");

  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Godfather",
      description:
        "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
      posterURL: theGodfatherImg,
      rating: 3,
      trailer: "https://www.youtube.com/embed/watch?v=UaVTIH8mujA",
    },
    {
      id: 2,
      title: "Drive",
      description:
        "This action drama follows a mysterious man who has multiple jobs as a garage mechanic, a Hollywood stuntman and a getaway driver seems to be trying to escape his shady past as he falls for his neighbor - whose husband is in prison and who's looking after her child alone.",
      posterURL: DriveImg,
      rating: 4,
      trailer: "https://youtu.be/KBiOF3y1W0Y",
    },
    {
      id: 3,
      title: "Taxi Driver",
      description:
        "Travis Bickle is a lonely, impotent and insomniac ex-marine, who spends his nights driving his taxi throughout the shadowy streets of mid-70's New York City. Travis is fed up with the society he finds himself surrounded by.",
      posterURL: TaxiDriverImg,
      rating: 5,
      trailer: "https://youtu.be/UUxD4-dEzn0",
    },
    {
      id: 4,
      title: "The matrix",
      description:
        "It depicts a dystopian future in which humanity is unknowingly trapped inside a simulated reality, the Matrix, which intelligent machines have created to distract humans while using their bodies as an energy source.",
      posterURL: TheMatrixImg,
      rating: 4,
      trailer: "https://youtu.be/vKQi3bBA1y8",
    },
    {
      id: 5,
      title: "Schindler's List",
      description:
        "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned Jewish workforce.",
      posterURL: schindlerImg,
      rating: 1,
      trailer: "https://www.youtube.com/embed/watch?v=gG22XNhtnoY",
    },

    {
      id: 6,
      title: "Inception",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology.",
      posterURL: inceptionImg,
      rating: 3,
      trailer: "https://www.youtube.com/embed/watch?v=YoHD9XEInc0",
    },
    {
      id: 7,
      title: "Fight Club",
      description:
        "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
      posterURL: fightClubImg,
      rating: 5,
      trailer: "https://www.youtube.com/embed/watch?v=qtRKdVHc-cE",
    },
    {
      id: 8,
      title: "Se7en",
      description:
        "centering on two detectives – a rookie and a veteran – who work together to hunt a serial killer. This killer is using the seven deadly sins as his motives, going after those he deems need to be treated a lesson.",
      posterURL: Se7enImg,
      rating: 5,
      trailer: "https://youtu.be/znmZoVkCjpI",
    },
  ]);


  const newMovie = {
    id: movies.length + 1,
    title: ntitle,
    description: ndescription,
    posterURL: nposter,
    rating: Math.floor(Math.random() * 5) + 1,
    trailer: ntrailer,
  };
  const movieAdd = () => {
    setMovies([...movies, newMovie]);
    setNtitle("");
    setNdescription("");
    setNposter("");
    setNtrailer("");
  };


  return (
    <>
      <Header />
      <Routes>
        <Route
          index
          path="/"
          element={
            <>
              <MovieList movies={movies} /> {/* Add Movie Feature */}
              <>
                {/* Add movie button */}
                <label
                  htmlFor="my-modal-5"
                  className="btn btn-circle bottom-8 right-8 z-40 fixed text-3xl font-normal w-14 h-14 bg-accent border-0"
                  onClick={()=> {tabTitle("Add Movie")}}
                >
                  +
                </label>
                {/* Add Movie Form */}
                <input
                  type="checkbox"
                  id="my-modal-5"
                  className="modal-toggle"
                />
                <label htmlFor="my-modal-5" className="modal cursor-pointer ">
                  <label className="modal-box relative w-96">
                    <h3 className="text-lg font-bold">List a New Movie!</h3>
                    <p className="pt-4">
                      <label className="label mt-2">
                        <span className="label-text">
                          What is the Movie Name?
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Movie Name"
                        className="input input-bordered input-bg-base-content w-full max-w-xs"
                        value={ntitle}
                        onChange={(e) => {
                          setNtitle(e.target.value);
                        }}
                      />
                      <label className="label mt-2">
                        <span className="label-text">
                          Short Description of the Movie?
                        </span>
                      </label>
                      <textarea
                        className="textarea textarea-bordered"
                        placeholder="Short Description"
                        cols={38}
                        value={ndescription}
                        onChange={(e) => {
                          setNdescription(e.target.value);
                        }}
                      ></textarea>
                      <label className="label">
                        <span className="label-text">Movie Poster Url?</span>
                      </label>
                      <input
                        type="url"
                        placeholder="Poster Url"
                        className="input input-bordered input-bg-base-content w-full max-w-xs"
                        value={nposter}
                        onChange={(e) => {
                          setNposter(e.target.value);
                        }}
                      />
                      <label className="label mt-2">
                        <span className="label-text">Movie Trailer Url?</span>
                      </label>
                      <input
                        type="url"
                        placeholder="Trailer Url"
                        className="input input-bordered input-bg-base-content w-full max-w-xs"
                        value={ntrailer}
                        onChange={(e) => {
                          setNtrailer(e.target.value);
                        }}
                      />
                      <label
                        htmlFor="my-modal-5"
                        className="mt-4 btn btn-xs sm:btn-sm md:btn-md lg:btn-md bg-accent border-0 w-44 ml-20"
                        onClick={movieAdd}
                      >
                        Submit
                      </label>
                    </p>
                  </label>
                </label>
              </>
              {/* End of Add Movie Feature */}
            </>
          }
        />
        <Route
          path="/movie/:movRoute"
          element={<MovieDetail movies={movies} />}
        />
        <Route path="*" element={<PageNotFound />} />
        
      </Routes>
    </>
  );
}

export default App;
