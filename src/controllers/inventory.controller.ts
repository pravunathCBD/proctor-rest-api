import { Request, Response } from 'express';
import { InventoryService } from '../services/inventory.service';
import { APIResponse } from '../types/inventory.types';

export class InventoryController {
  static async createItem(req: Request, res: Response): Promise<void> {
    try {
      const item = await InventoryService.createItem(req.body);
      const response: APIResponse = {
        success: true,
        message: 'Inventory item created successfully',
        data: item,
      };
      res.status(201).json(response);
    } catch (error: any) {
      const response: APIResponse = {
        success: false,
        message: 'Failed to create inventory item',
        error: error.message,
      };
      res.status(400).json(response);
    }
  }

  static async getItem(req: Request, res: Response): Promise<void> {
    try {
      const item = await InventoryService.getItem(req.params.itemId);
      if (!item) {
        const response: APIResponse = {
          success: false,
          message: 'Inventory item not found',
        };
        res.status(404).json(response);
        return;
      }

      const response: APIResponse = {
        success: true,
        message: 'Inventory item retrieved successfully',
        data: item,
      };
      res.status(200).json(response);
    } catch (error: any) {
      const response: APIResponse = {
        success: false,
        message: 'Failed to retrieve inventory item',
        error: error.message,
      };
      res.status(400).json(response);
    }
  }

  static async updateItem(req: Request, res: Response): Promise<void> {
    try {
      const item = await InventoryService.updateItem(
        req.params.itemId,
        req.body
      );
      if (!item) {
        const response: APIResponse = {
          success: false,
          message: 'Inventory item not found',
        };
        res.status(404).json(response);
        return;
      }

      const response: APIResponse = {
        success: true,
        message: 'Inventory item updated successfully',
        data: item,
      };
      res.status(200).json(response);
    } catch (error: any) {
      const response: APIResponse = {
        success: false,
        message: 'Failed to update inventory item',
        error: error.message,
      };
      res.status(400).json(response);
    }
  }

  static async deleteItem(req: Request, res: Response): Promise<void> {
    try {
      const item = await InventoryService.deleteItem(req.params.itemId);
      if (!item) {
        const response: APIResponse = {
          success: false,
          message: 'Inventory item not found',
        };
        res.status(404).json(response);
        return;
      }

      const response: APIResponse = {
        success: true,
        message: 'Inventory item deleted successfully',
        data: item,
      };
      res.status(200).json(response);
    } catch (error: any) {
      const response: APIResponse = {
        success: false,
        message: 'Failed to delete inventory item',
        error: error.message,
      };
      res.status(400).json(response);
    }
  }

  static async fillInventory(req: Request, res: Response): Promise<void> {
    try {
      const item = await InventoryService.fillInventory(
        req.params.itemId,
        req.body.quantity
      );
      if (!item) {
        const response: APIResponse = {
          success: false,
          message: 'Inventory item not found',
        };
        res.status(404).json(response);
        return;
      }

      const response: APIResponse = {
        success: true,
        message: 'Inventory filled successfully',
        data: item,
      };
      res.status(200).json(response);
    } catch (error: any) {
      const response: APIResponse = {
        success: false,
        message: 'Failed to fill inventory',
        error: error.message,
      };
      res.status(400).json(response);
    }
  }

  static async useInventory(req: Request, res: Response): Promise<void> {
    try {
      const item = await InventoryService.useInventory(
        req.params.itemId,
        req.body.quantity
      );
      if (!item) {
        const response: APIResponse = {
          success: false,
          message: 'Inventory item not found',
        };
        res.status(404).json(response);
        return;
      }

      const response: APIResponse = {
        success: true,
        message: 'Inventory used successfully',
        data: item,
      };
      res.status(200).json(response);
    } catch (error: any) {
      const response: APIResponse = {
        success: false,
        message: 'Failed to use inventory',
        error: error.message,
      };
      res.status(400).json(response);
    }
  }

  static async getExpiredItems(req: Request, res: Response): Promise<void> {
    try {
      const items = await InventoryService.getExpiredItems();
      const response: APIResponse = {
        success: true,
        message: 'Expired inventory items retrieved successfully',
        data: items,
      };
      res.status(200).json(response);
    } catch (error: any) {
      const response: APIResponse = {
        success: false,
        message: 'Failed to retrieve expired inventory items',
        error: error.message,
      };
      res.status(400).json(response);
    }
  }
}
