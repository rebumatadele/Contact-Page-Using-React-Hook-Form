const form = () => {
  return (
    <div className="container d-flex justify-content-center mt-2">
      <div className="col-md-2">
        <div className="mb-3">
          <input
            type="text"
            className="form-control-sm"
            placeholder="Enter text"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control-sm"
            placeholder="Enter text"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control-sm"
            placeholder="Enter text"
          />
        </div>
        <button className="btn btn-primary btn-sm w-100">Submit</button>
      </div>
    </div>
  );
};

export default form;
