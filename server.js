import express from "express";
import mongoose from "mongoose";
import {urlencoded, json} from "body-parser";
import passport from "passport";
import path from "path";

const app = express();

app.use(urlencoded({ extended: true}));
app.use(json());

// Passport middleware
app.use(passport.initialize());

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});