import { Form, Input, Button } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
export const CreatePost = ({ onCreate }) => {
  const createFinishPost = async (val) => {
    try {
      const res = await axios.post("https://dummyjson.com/posts/add", {
        ...val,
        userId: 1,
      });

    //   console.log(res);
      if (res?.status >= 200 && res?.status < 300) {
          onCreate(res.data)  
          console.log(res);
          toast.success("succes");
        
      }
    } catch (e) {
      toast.error(e, "create error");
    }
  };
  return (
    <div style={{ marginBottom: 80 }}>
      <Form layout="vertical" onFinish={createFinishPost}>
        <Form.Item
          style={{ color: "white" }}
          label="Title text"
          name="title"
          rules={[{ required: true, message: "please input your post" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Post text"
          name="body"
          rules={[{ required: true, message: "please input your post" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
