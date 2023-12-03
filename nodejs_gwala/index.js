const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const rateLimit = require('express-rate-limit');
const bcrypt = require("bcryptjs");
app.use(express.urlencoded({extended: true}));
app.use(express.json());
require('dotenv').config({path: "./index.env"});
const QuestionModel = require("./modals/question");
const UserModel = require("./modals/users");
const AnswerModel = require("./modals/answer");
const token = require("./modals/token");

const PORT=process.env.PORT1 || process.env.PORT2;
const URI= process.env.MONGODB_URI;
app.listen(PORT, () => console.log(`server running on port ${PORT}...`));
mongoose.connect(`${URI}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));

app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser.json());
const jwt = require("jsonwebtoken")

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
// Apply the rate limiting middleware to all requests
app.use(limiter)
      app.post("/Signin",async (req,res)=>{
        const users = req.body;
      const password= req.body.password
      try {
      let verify = await UserModel.findOne({
        email: users.email,
      });    

      if (verify) {
        const auth = await bcrypt.compare(password, verify.password)

        if (!auth) {
          return res.send({message:'Incorrect password or email' }) 
        }    
        res.send('You are connected successfully');
      }
       else {
        res.send(verify);
      }
    }
      catch (err) {
        console.log(err);
      }
    });
    app.post("/Signup", async (req, res) => {
      const users = req.body;
      try {
        let verify = await UserModel.findOne({
          email: users.email
        });
        if (verify) {
          console.log("user already exist")
          res.send(verify);
        } else {
          const newuser = new UserModel(users);
          let save = await newuser.save();
          if (save) {
            res.send("user saved successfully");
          } else {
            res.send("not inserted");
          }
        }
      } catch (err) {
        console.log(err);
      }
    });
    app.post("/forgetpassword", async (req, res) => {
      const users = req.body;
      try {
        // Find the user by email
        let verify = await UserModel.findOne({
          email: users.email,
        });
        if (verify) {
          const auth = await bcrypt.compare(users.password, verify.password)
            if (auth) {
              verify.password = req.body.newPassword;
              let updatedUser = await verify.save();
              if (updatedUser) {
                res.send("Password updated successfully");
              }
             else {
                res.send("Failed to update password");
            }}
        } else {
            res.send("User not found" );
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error" );
    }
});
    app.post("/qestions", async (req, res) => {
      const Question = req.body;
      try {
          const newQuestion = new QuestionModel(Question);
          let save = await newQuestion.save();
          if (save) {
            res.send("new Question inserted");
          } else {
            res.send("not inserted");
          }
      } catch (err) {
        console.log(err);
      }
    });
    app.post("/answers", async (req, res) => {
      const answer = req.body;
      try {
          const newanswer = new AnswerModel(answer);
          let save = await newanswer.save();
          if (save) {
            res.send("new answer inserted");
          } else {
            res.send("not inserted");
          }
      } catch (err) {
        console.log(err);
      }
    });
    app.get("/Listquestions", async (req,res)=>{ 
      try{
      let  lists=await QuestionModel.find()
       res.send(lists);
      }
      catch(err){
        console.log(err);
      }
    });
    app.post("/add", async(req,res)=>{
      const Question=req.body
      console.log(Question)
      try{
      const newQuestion = new QuestionModel(Question);
      let save = await newQuestion.save();
      let  lists=await QuestionModel.find({}); 
      if (save) {
        res.send(lists);
      } else {
        res.send("not inserted");
      }
    } catch (err) {
    console.log(err);
  }
});
