import { AppWindowIcon, CodeIcon, Loader,Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

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
import { useRegisterUserMutation } from "../../features/authApi";
import { useLoginUserMutation } from "../../features/authApi";

function Login() {
  const [SignupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [LoginInput, setLoginInput] = useState({ email: "", password: "" });
  const [
    registerUser,
    {
      data: registerData,
      error: registerError,
      isLoading: registerLoading,
      isSuccess: registerISSuccess,
    },
  ] = useRegisterUserMutation();
  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isLoading: loginLoading,
      isSuccess: loginISSuccess,
    },
  ] = useLoginUserMutation();

  const changeInputHandler = (e, type) => {
    console.log(e.target.name);
    console.log(e.target.value);

    const { name, value } = e.target;

    if (type === "signup") {
      setSignupInput({ ...SignupInput, [name]: value }); //frome e.tareget name may come as string
    } else {
      setLoginInput({ ...LoginInput, [name]: value });
    }
  };
  const showData = async (type) => {
    const inputData = type === "signup" ? SignupInput : LoginInput;
    console.log(inputData);
    const action = type === "signup" ? registerUser : loginUser;
    await action(inputData);
  };
  useEffect(() => {
  if (registerISSuccess && registerData) {
    toast.success(registerData?.data?.message || "Registration Successful");
  }
  if (registerError) {
    toast.error(
      registerError?.data?.message || registerError?.error || "Registration Failed"
    );
  }
  if (loginISSuccess && loginData) {
    toast.success(loginData?.data?.message || "Login Successful");
  }
  if (loginError) {
    toast.error(
      loginError?.data?.message || loginError?.error || "Login Failed"
    );
  }
}, [
  registerISSuccess,
  loginISSuccess,
  registerData,
  loginData,
  registerError,
  loginError,
]);

  return (
    <div className="flex items-center justify-center ">
      <div className="flex w-full max-w-sm flex-col gap-6 mt-20">
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="Signup">Signupp</TabsTrigger>
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
                    onChange={(e) => changeInputHandler(e, "signup")} //here on change in event we have our e.target so we need  to pass it ass paramater.
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
                <Button onClick={() => showData("signup")}>
                  {registerLoading ? (
                    <>
                      <Loader className="mr-2 h-4 w-4 animate-spin" />
                      please wait
                    </>
                  ) : (
                    "Sign Up"
                  )}
                </Button>
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
                    onChange={(e) => changeInputHandler(e, "login")}
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
                    onChange={(e) => changeInputHandler(e, "login")}
                    id="tabs-demo-new"
                    type="password"
                    placeholder="Eg. Abc@123"
                    required
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  disabled={loginLoading}
                  onClick={() => showData("login")}
                >
                  {loginLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      please wait
                    </>
                  ) : (
                    "login"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Login;
