import { Router } from "express";
const matchRouter = Router()

matchRouter.post('/request/:mentorId', (req, res) => {
    res.send({title: "Mentee request mentorship from a mentor <AUTHENTICATED <Mentee>"})
})



export default matchRouter