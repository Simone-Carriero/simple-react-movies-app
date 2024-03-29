const MovieListHeading = ({ heading }) => {
  const headingType = () => {
    return heading === 'Movies' ? <h1>{heading}</h1> : <h2>{heading}</h2>;
  };

  return <>{headingType()}</>;
};

export default MovieListHeading;
