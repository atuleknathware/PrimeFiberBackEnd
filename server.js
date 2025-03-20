import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Models/db.js";
import AuthRouter from "./Routes/AuthRouter.js";
import AdminRoute from "./Routes/AdminAuth.js";
import PlanRoutes from "./Routes/PlanRoutes.js";
import BusinessPlanRoutes from "./Routes/BusinessPlanRoutes.js";
import Homeplan from "./Routes/PlanRoutes.js";
// import Businessplan from "./Routes/BusinessPlanRoutes.js";
import user from "./Routes/Userdata.js";
import Logo from "./Routes/LogoRoute.js";
import partners from "./Routes/PatnersRoutes.js";
import mobileRoute from "./Routes/mobileRoute.js";
import path from 'path';

const app = express();
dotenv.config(); // Ensure dotenv is loaded for environment variables

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'build')));
const PORT = process.env.PORT || 8080;

const allowedOrigins = [
    'http://localhost:5173', // Replace with your localhost URL and port
    'http://primenetworks.in/', // Replace with your specific URL
    'https://primenetworks.in/'
  ];

// Connect to the database and start the server after the DB connection is successful
connectDB()
  .then(() => {
    // Once the DB is connected, use the middlewares
    app.use(express.json());
    const corsOptions = {
        origin: function (origin, callback) {
          // Allow requests with no origin (like mobile apps or curl requests)
          if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
          } else {
            callback(new Error('Not allowed by CORS'));
          }
        },
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
        allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
        credentials: true // Enable cookies and authorization headers
      };

    //   app.use(cors(corsOptions));
      app.use(cors());

    // Define the route for the landing page
    // app.get("/", (req, res) => {
    //   res.send("<h1>Welcome to the Homeplan API</h1>");
    // });

    app.use("/uploads", express.static("uploads"));

    // API routes
    app.use("/api", AuthRouter);
    app.use("/api/admin", AdminRoute);
    app.use("/api/plans", PlanRoutes);
    app.use("/api/businessPlans", BusinessPlanRoutes);
    app.use("/api/homeplans", Homeplan);
    app.use("/api/user", user);
    app.use("/api/logo", Logo);
    app.use("/api/partners", partners);
    app.use("/api/mobileno", mobileRoute);


    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });

    // app.use('/api/businessPlans', Businessplan);

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    // Error handling if DB connection fails
    console.error("Failed to connect to MongoDB", err);
  });
