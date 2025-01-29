import express from "express";
import {
  getAllGadgets,
  createGadget,
  updateGadget,
  deleteGadget,
  selfDestructGadget,
  getGadgets,
} from "../controllers/gadget.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Gadget routes

// GET /gadgets
router.get("/", verifyToken, getAllGadgets); 

// POST /gadgets
router.post("/", verifyToken, createGadget);

// PATCH /gadgets/:id 
router.patch("/:id", verifyToken, updateGadget); 

// DELETE /gadgets/:id
router.delete("/:id", verifyToken, deleteGadget); 

// POST /gadgets/:id/self-destruct
router.post("/:id/self-destruct", verifyToken, selfDestructGadget); 

// GET /gadgets?status={status}
router.get('/', verifyToken, getGadgets);

export default router;
