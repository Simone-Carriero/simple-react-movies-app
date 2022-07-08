import MovieListHeading from "./components/movie-list-heading.component";
import SearchBox from "./components/search-box.component";



function App() {
  return (
    <div className="container-fluid">
      <div className="row d-flex align-items-center p-3">
        <MovieListHeading
          heading="Movies"
        />
        <SearchBox />
      </div>
    </div>
  );
}

export default App;
