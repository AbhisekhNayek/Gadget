import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// POST: Create a new gadget
export const createGadget = async (req, res) => {
  const { name, codename } = req.body;
  
  try {
    const newGadget = await prisma.gadget.create({
      data: {
        name,
        codename,
        status: 'Available',
      },
    });
    res.status(201).json(newGadget);
  } catch (error) {
    res.status(500).json({ error: 'Error creating gadget' });
  }
};



// GET: Retrieve all gadgets
export const getAllGadgets = async (req, res) => {
  try {
    const gadgets = await prisma.gadget.findMany();
    
    // Add a random mission success probability
    const gadgetsWithSuccessProbability = gadgets.map(gadget => {
      return {
        ...gadget,
        missionSuccessProbability: Math.floor(Math.random() * 100) + '%',
      };
    });

    res.status(200).json(gadgetsWithSuccessProbability);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching gadgets' });
  }
};



// PATCH: Update an existing gadget
export const updateGadget = async (req, res) => {
  const { id } = req.params;
  const { name, codename, status } = req.body;

  try {
    const updatedGadget = await prisma.gadget.update({
      where: { id },
      data: {
        name,
        codename,
        status,
        updatedAt: new Date(),
      },
    });
    res.status(200).json(updatedGadget);
  } catch (error) {
    res.status(500).json({ error: 'Error updating gadget' });
  }
};



// DELETE: Remove a gadget (decommission it)
export const deleteGadget = async (req, res) => {
  const { id } = req.params;

  try {
    const decommissionedGadget = await prisma.gadget.update({
      where: { id },
      data: {
        status: 'Decommissioned',
        decommissionedAt: new Date(),
      },
    });
    res.status(200).json(decommissionedGadget);
  } catch (error) {
    res.status(500).json({ error: 'Error decommissioning gadget' });
  }
};



// POST: Trigger the self-destruct sequence for a specific gadget
export const selfDestructGadget = async (req, res) => {
  const { id } = req.params;

  try {
    const destroyedGadget = await prisma.gadget.update({
      where: { id },
      data: {
        status: 'Destroyed',
        decommissionedAt: new Date(),
      },
    });
    res.status(200).json(destroyedGadget);
  } catch (error) {
    res.status(500).json({ error: 'Error triggering self-destruct sequence' });
  }
};



// GET: Retrieve gadgets with optional status filter
export const getGadgets = async (req, res) => {
  let { status } = req.query; 

  try {
    // Ensure status filtering is applied properly
    const where = status ? { status: { equals: status } } : {}; 

    // Fetch gadgets from the database 
    const gadgets = await prisma.gadget.findMany({
      where,
    });

    // Add mission success probability to each gadget
    const gadgetsWithProbability = gadgets.map((gadget) => ({
      ...gadget,
      missionSuccessProbability: `${Math.floor(Math.random() * 100) + 1}%`, 
    }));

    // Send the response with the filtered gadgets and their probabilities
    res.status(200).json(gadgetsWithProbability);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error retrieving gadgets' });
  }
};

