import express from "express";
import {login,register} from "../controllers/user.controller.js"

const router = express.Router();

router.post("/register", register);

// Login
router.post("/login", login);



// router.post("/register",register);
// router.post("/login",login);

export default router;


