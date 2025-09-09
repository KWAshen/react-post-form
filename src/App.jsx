
function App() {


  return (
    <div className="container my-5">
     <div className="row">
      <div className="col-12">
        <h1>react-post-form</h1>
      </div>
      <div className="col-12">
        <form>
          <div className="row">
            <div className="col-12 col-md-4">
              <form action="" className="form-label">Author</form>
              <input type="text" className="form-control" placeholder="Autore" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4">
              <form action="" className="form-label">Title</form>
              <input type="text" className="from-control" placeholder="Title" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4">
              <form action="" className="form-label">Body</form>
              <input type="check-box" className="form-check-input " />
            </div>
            <div className="col-12">
              <label htmlFor="form-lable">text
              </label>
              <textarea name="" id="" className="form-control" rows="4" placeholder="text"></textarea>
            </div>
            <div className="col-12">
              <button className="btn btn-sucess"></button>
            </div>
          </div>
        </form>
      </div>
     </div>
    </div>
  )
}

export default App
