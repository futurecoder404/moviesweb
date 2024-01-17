import { Chip } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
//   const handleAdd = (genre) => {
//     setSelectedGenres([...selectedGenres, genre]);
//     setGenres(genres.filter((g) => g.id !== genre.id));
//     setPage(1);
//   };

//   const handleRemove = (genre) => {
//     setSelectedGenres(
//       selectedGenres.filter((selected) => selected.id !== genre.id)
//     );
//     setGenres([...genres, genre]);
//     setPage(1);
//   };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=4f55c8658d08f3da09cfb51c49baa2e2&language=en-US'
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({}); // unmounting
    };
    // eslint-disable-next-line
  }, []);
console.log(genres);
  return (
    // <div style={{ padding: "6px 0" }}>
    //   {selectedGenres.map((genre) => (
    //     <Chip
    //       style={{ margin: 2 }}
    //       label={genre.name}
    //       key={genre.id}
    //       color="primary"
    //       clickable
    //       size="small"
    //       onDelete={() => handleRemove(genre)}
    //     />
    //   ))}
    //   {genres.map((genre) => (
    //     <Chip
    //       style={{ margin: 2 }}
    //       label={genre.name}
    //       key={genre.id}
    //       clickable
    //       size="small"
    //       onClick={() => handleAdd(genre)}
    //     />
    //   ))}
    // </div>
    <div style={{padding:"6px 0"}}>
     {/* {genres && genres.map((genre)=><Chip />)} */}
    {/* {genres.map((genre)=>(
        <Chip/>
    ))} */}
    <Chip label={genres.name}/>
    </div>
  );
};

export default Genres