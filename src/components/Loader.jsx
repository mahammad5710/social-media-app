const Loader = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status" style={{width:"5rem", height:"5rem" ,margin:"10%"}}>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};
export default Loader;
