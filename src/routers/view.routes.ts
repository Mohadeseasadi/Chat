import { Request, Response, Router } from "express";

const viewRouter = Router();

viewRouter.get("/login", (req: Request, res: Response) => {
  res.render("login", {
    pageTitle: "Login",
    headerText: "Join to App",
    buttonText: "Login",
    formId: "loginForm",
    bottomText: "Don't have an account?",
    bottomLink: "/signup",
    bottomLinkText: "Sign up",
    formJs: "login.js",
  });
});

viewRouter.get("/signup", (req: Request, res: Response) => {
  res.render("login", {
    pageTitle: "Sign Up",
    headerText: "Create Account",
    buttonText: "Sign Up",
    formId: "signupForm",
    bottomText: "Already have an account?",
    bottomLink: "/login",
    bottomLinkText: "Login",
    formJs: "signup.js",
  });
});

viewRouter.get("/chat", (req: Request, res: Response) => {
  res.render("chat");
});

viewRouter.get("/profile", (req: Request, res: Response) => {
  res.render("profile");
});

export default viewRouter;
