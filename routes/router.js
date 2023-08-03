import { Router } from "express";
const router = Router();

router.get("/", (req, res)=>{
    res.send('Hello World');
});

router.get("/teste", (req, res)=>{
    res.send("welcome to teste")
})


export default router;