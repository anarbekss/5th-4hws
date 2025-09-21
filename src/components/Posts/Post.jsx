import { Card, Button, Flex } from "antd";
import axios from "axios";
import {POSTS_API} from "../Posts/Posts"
import { toast } from "react-toastify";

export const Post = ({ post, realDelete }) => {
    const deletPost = async () => {
        try{ 
            if (!post?.id) return;
            await axios.delete(POSTS_API + `/${post?.id}`)
            console.log(post);
            realDelete(post?.id)
            toast.success('sucsses')
        }catch (e){
            toast.error('error post')
            console.log(e);
        }
    }
  return (
    <div>
      <Card title={post.title} size="small">
        <Flex style={{alignItems:'center', justifyContent: 'space-between', gap: 50}}>
          <p>{post.body}</p>
          <Button danger onClick={deletPost}>Delete</Button>
        </Flex>
      </Card>
    </div>
  );
};
