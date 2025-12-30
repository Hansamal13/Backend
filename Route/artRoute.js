import express from "express";
import artControllers from "../Controllers/artControllers.js";

const router = express.Router();

// IMPORTANT: Put specific routes BEFORE parameter routes
// Upload image route should come before the /:id routes
router.post("/upload-image", artControllers.upload.single("image"), artControllers.handleImageUpload);

// Get all artworks
router.get("/", artControllers.getAllArtworks);

// Add new artwork
router.post("/", artControllers.addArtwork);

// Routes with parameters should come AFTER specific routes
// Get artwork by ID
router.get("/:id", artControllers.getArtworkById);

// Update artwork
router.put("/:id", artControllers.updateArtwork);

// Delete artwork
router.delete("/:id", artControllers.deleteArtwork);


export default router;
