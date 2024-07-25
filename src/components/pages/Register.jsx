import { Button, Form, Input } from "antd";
import {
   LockOutlined,
   UserOutlined,
   MailOutlined,
   EyeInvisibleOutlined,
   EyeTwoTone,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

function Register() {
   const [passwordVisible, setPasswordVisible] = useState(false);
   const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
   };

   return (
      <div className="flex justify-center items-center h-[100vh]">
         <div className=" w-[350px] mx-2">
            <div className="flex justify-between underline underline-offset-8 text-xl font-bold mb-5 ">
               <Link
                  to="/register"
                  className="text-blue-500 cursor-default"
               >
                  Register
               </Link>
               <Link
                  to="/"
                  className="text-blue-300"
               >
                  Login
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
                     type="username"
                     placeholder="Username"
                  />
               </Form.Item>
               <Form.Item
                  name="email"
                  rules={[
                     {
                        required: true,
                        message: "Please input your Email!",
                     },
                  ]}
               >
                  <Input
                     prefix={<MailOutlined />}
                     type="email"
                     placeholder="Email Id"
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
                     suffix={
                        <Button
                           icon={
                              passwordVisible ? (
                                 <EyeTwoTone />
                              ) : (
                                 <EyeInvisibleOutlined />
                              )
                           }
                           onClick={togglePasswordVisibility}
                           type="small"
                        />
                     }
                     type={passwordVisible ? "text" : "password"}
                     placeholder="Password"
                  />
               </Form.Item>
               <Form.Item>
                  <Button
                     type="primary"
                     htmlType="submit"
                     className="w-full"
                  >
                     Register
                  </Button>
               </Form.Item>
            </Form>
         </div>
         <div className="h-[100vh]  border-l-[500px] border-l-transparent border-b-[100vh] border-b-blue-200 absolute right-0 z-[-1]"></div>
      </div>
   );
}

export default Register;
