import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditPost() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:3001/editpost/" + id, { title, description })
      .then((res) => {
        console.log(res.data);
        if (res.data === "Success") {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/getpostbyid/" + id)
      .then((result) => {
        setTitle(result.data.title);
        setDescription(result.data.description);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="post_container">
      <div className="post_form">
        <form onSubmit={handleSubmit}>
          <h2>Update Post</h2>
          <input
            type="text"
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <textarea
            name="desc"
            id="desc"
            cols="30"
            rows="10"
            placeholder="Enter Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}

export default EditPost;
