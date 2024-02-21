import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken"
import { sample_users } from "./model/skin-care";

const app = express(); 
//locahost:4200 fron
//localhost:4000  back 
// deficult to request to deffrent adddress so we need cors

// origin:["http:/localhost:4200"]

app.use(express.json()); //req.body parse in json

app.use(cors({
    credentials:true,
    origin:"*"
}))


app.post("/api/users/login",(req,res)=>{
    const {email,password} = req.body;

    console.log("checkkkkkkkk",req.body.email)

    const user = sample_users.find(user => user.email === email 
        && user.password === password);

        if(user){
            res.send(generateTokenResponse(user));
        }
        else{
            res.status(400).send("User name or password is not valid!");
        }

});

const generateTokenResponse = (user:any) => {
  const token = jwt.sign({
    email:user.email, 
    isAdmin: user.isAdmin
  },"someRandomText",{
    expiresIn:"30d"
  });

  user.token = token;
  return user;
}



//port listen
const port = 4000;
app.listen(port,() =>{
    console.log("Website serverd on http://localhost: "+port);
})