import axios from "axios"
import {Link, useParams, useNavigate} from "react-router-dom"
import { useEffect, useState, useContext} from "react"
import Logo from "./assets/react.svg";
import { userContext } from "./App";

function Post() {
    const {id} = useParams()
    const [post,setPost] = useState({})
    const navigate = useNavigate()
    const user = useContext(userContext)
    useEffect(() => {
        axios.get('http://localhost:3001/getpostbyid/'+id)
        .then(result => setPost(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deletepost/'+id)
        .then(result => {
            navigate('/home')
        })
        .catch(err => console.log(err))
    }

  return (
    <div className="post_container">
      <div className="post_post">
        <img src={Logo} alt="" />
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <div>
          {
            user.email === post.email ? 
            <>
                        <Link to={`/editpost/${post._id}`}>Edit</Link>
            <button onClick={e => handleDelete(post._id)}>Delete</button>
            </> : <></>
          }

        </div>
      </div>
    </div>
  )
}

export default Post
