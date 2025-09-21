import { Space } from "antd";
import { useEffect, useState } from "react";
import { Post } from "./Post";
import axios from "axios";
import { CreatePost } from "./CreatePost";

export const POSTS_API = "https://dummyjson.com/posts"
export const Posts = () => {
  const [todos, setTodos] = useState([]);

  const getAllTodos = async () => { 
    try {
      const {data} = await axios.get(POSTS_API);
        setTodos(data?.posts ?? []);
    } catch (e) {
      console.log(e, "error posts");
    }
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  const createPost = (post) => {
    setTodos((prev) => [post, ...prev] )
  }

  const realDelete = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id))
  }
   return (
    <div>
      <CreatePost onCreate={createPost}/>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        {todos.map((t) => <Post key={t?.id} post={t} realDelete={realDelete}/>)}
      </Space>
    </div>
  );
};
