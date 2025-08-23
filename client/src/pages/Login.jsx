import { AppWindowIcon, CodeIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Login() {
  const [SignupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [LoginInput, setLoginInput] = useState({ email: "", password: "" });

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;

    if (type === "signup") {
      setSignupInput({ ...SignupInput, [name]: value });
    } else {
      setLoginInput({ ...LoginInput, [name]: value });
    }
  }; 
  const showData = (type) =>{
   const inputData = type === "signup" ? SignupInput : LoginInput;
   console.log(inputData);
  }
  
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="Signup">Signup</TabsTrigger>
            <TabsTrigger value="Login">Login</TabsTrigger>
          </TabsList>
          <TabsContent value="Signup">
            <Card>
              <CardHeader>
                <CardTitle>Signup</CardTitle>
                <CardDescription>
                  Enter your details, choose a password, and click Sign Up to
                  create your account.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-name">Name</Label>
                  <Input
                    name="name"
                    value={SignupInput.name}
                    onChange={(e) => changeInputHandler(e, "signup")}
                    id="tabs-demo-name"
                    type="text"
                    placeholder="Eg. Abhi"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-email">Email</Label>
                  <Input
                    name="email"
                    value={SignupInput.email}
                    onChange={(e) => changeInputHandler(e, "signup")}
                    id="tabs-demo-email"
                    type="email"
                    placeholder="Eg. Abhi@gmail.com"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-password">Password</Label>
                  <Input
                    name="password"
                    onChange={(e) => changeInputHandler(e, "signup")}
                    value={SignupInput.password}
                    id="tabs-demo-password"
                    type="password"
                    placeholder="Eg. Abc@123"
                    required
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={()=>showData("signup")}>Signup</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="Login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  Enter your email and password, then click Log In to access
                  your account.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-current">Email</Label>
                  <Input
                    name="email"
                    onChange={(e) => changeInputHandler(e, "Login")}
                    value={LoginInput.email}
                    id="tabs-demo-current"
                    type="email"
                    placeholder="Eg. Abhi@gmail.com"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-new">Password</Label>
                  <Input
                    name="password"
                    value={LoginInput.password}
                    onChange={(e) => changeInputHandler(e, "Login")}
                    id="tabs-demo-new"
                    type="password"
                    placeholder="Eg. Abc@123"
                    required
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={()=>showData("Login")}>Login</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Login;
