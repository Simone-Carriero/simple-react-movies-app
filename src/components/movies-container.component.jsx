const MoviesContainer = ({ children }) => {
  return (
    <section className='flex-grow-1 d-flex align-items-center justify-content-center px-3 px-md-0'>
      {children}
    </section>
  );
};

export default MoviesContainer;
