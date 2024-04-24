import express from 'express';
import session from "express-session";
import mongoose from "mongoose";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import cors from "cors";
import "dotenv/config";
import AssignmentRoutes from './Kanbas/assignments/routes.js';
import ModuleRoutes from "./Kanbas/modules/routes.js";
import UserRoutes from "./Users/routes.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin:  process.env.FRONTEND_URL
} 
));
  const sessionOptions = {
    secret:  process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      // domain: process.env.HTTP_SERVER_DOMAIN,
    };
  }
  
  app.use(
    session(sessionOptions)
  );
 
Hello(app)
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
Lab5(app);
UserRoutes(app);
app.listen(process.env.PORT || 4000);