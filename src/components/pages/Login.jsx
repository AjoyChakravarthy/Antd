import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
function login() {
   return (
      <div className="flex justify-center items-center h-[100vh]">
         <div className=" w-[350px] mx-2">
            <div className="flex justify-between underline underline-offset-8 text-xl font-bold mb-5">
               <Link
                  to="/"
                  className="text-blue-500 cursor-default"
               >
                  Login
               </Link>
               <Link
                  to="/register"
                  className="text-blue-300"
               >
                  Register
               </Link>
            </div>
            <Form className="max-w-[350px]">
               <Form.Item
                  name="username"
                  rules={[
                     {
                        required: true,
                        message: "Please input your Username!",
                     },
                  ]}
               >
                  <Input
                     prefix={<UserOutlined />}
                     placeholder="Username"
                  />
               </Form.Item>
               <Form.Item
                  name="password"
                  rules={[
                     {
                        required: true,
                        message: "Please input your Password!",
                     },
                  ]}
               >
                  <Input
                     prefix={<LockOutlined />}
                     type="password"
                     placeholder="Password"
                  />
               </Form.Item>
               <Form.Item
                  name="remember"
                  valuePropName="checked"
               >
                  <Checkbox>Remember me</Checkbox>
                  <a
                     className="text-blue-600  float-right"
                     href=""
                  >
                     Forgot password
                  </a>
               </Form.Item>
               <Form.Item>
                  <Button
                     type="primary"
                     htmlType="submit"
                     className="w-full"
                  >
                     Log in
                  </Button>
               </Form.Item>
            </Form>
         </div>
         <div className="h-[100vh]  border-l-[500px] border-l-transparent border-b-[100vh] border-b-blue-200 absolute right-0 z-[-1]"></div>
      </div>
   );
}

export default login;
