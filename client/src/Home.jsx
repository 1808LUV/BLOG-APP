import axios from "axios";
import { useEffect, useState } from "react";
import Logo from "./assets/react.svg";
import {Link} from "react-router-dom"

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/getposts")
      .then((posts) => {
        setPosts(posts.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="post_container">
      <div>
        {posts.map((post) => (
          <Link key={post._id} to={`/post/${post._id}`}>
            <div className="post">
              <img src={Logo} alt="" />
              <div className="post_text">
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
