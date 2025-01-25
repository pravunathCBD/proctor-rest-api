import { Router } from 'express';
import { RequestHandler } from 'express';
import { InventoryController } from '../controllers/inventory.controller';
import {
  validateCreateInventory,
  validateUpdateInventory,
  validateQuantityUpdate,
  validateItemId,
} from '../middleware/validation.middleware';

const router = Router();

// Create inventory item
router.post(
  '/',
  validateCreateInventory as RequestHandler[],
  InventoryController.createItem
);

// Get inventory item by ID
router.get(
  '/:itemId',
  validateItemId as RequestHandler[],
  InventoryController.getItem
);

// Update inventory item
router.put(
  '/:itemId',
  validateUpdateInventory as RequestHandler[],
  InventoryController.updateItem
);

// Delete inventory item
router.delete(
  '/:itemId',
  validateItemId as RequestHandler[],
  InventoryController.deleteItem
);

// Fill inventory
router.post(
  '/:itemId/fill',
  validateQuantityUpdate as RequestHandler[],
  InventoryController.fillInventory
);

// Use inventory
router.post(
  '/:itemId/use',
  validateQuantityUpdate as RequestHandler[],
  InventoryController.useInventory
);

// Get expired items
router.get('/expired', InventoryController.getExpiredItems as RequestHandler);

export default router;
