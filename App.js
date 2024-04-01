import express from 'express';
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import cors from "cors";
import AssignmentRoutes from './Kanbas/assignments/routes.js';
import ModuleRoutes from "./Kanbas/modules/routes.js";
const app = express();
app.use(express.json());
app.use(cors());
Hello(app)
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
Lab5(app);
app.listen(process.env.PORT || 4000);