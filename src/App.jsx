import { useState } from "react";
import axios from "axios";

function App() {
  const [formdata, setformdata] = useState({
    author:"",
    title:"",
    public:"",
    body:"",
  })

const handleChange = (e) => {
  e.preventdefoult();
  axios
    .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts",formdata)
    .then((resp) => {
      console.log(resp.data);
    }).catch(err =>console.log("Errore nell\'effettuare la chiamata"+err));
}



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
              <form action="" className="form-label">author</form>
              <input type="text"
              name="author"
              value={formdata.author}
              className="form-control" placeholder="author"
              onChange={handleChange}/>
              
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4">
              <form action="" className="form-label">Title</form>
              <input type="text"
              name="title"
              value={formdata.title}
              className="from-control" placeholder="Title" onChange={handleChange}/>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4">
              <form action="" className="form-label">public</form>
              <div>
              <input type="check-box"
              name="public"
              checked={formdata.public}
              className="form-check "
              placeholder="public"/>
              
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="form-lable">text
              </label>
              <textarea name="body" id="body"
              value={formdata.body}
              className="form-control" rows="4" placeholder="text" onChange={handleChange}></textarea>
            </div>
            <div className="col-12">
              <button className="btn btn-success">Save</button>
            </div>
          </div>
        </form>
      </div>
     </div>
    </div>
  )
}

export default App
