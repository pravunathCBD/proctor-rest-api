import { InventoryModel } from '../models/inventory.model';
import {
  CreateInventoryDTO,
  UpdateInventoryDTO,
  IInventoryItem,
} from '../types/inventory.types';
import moment from 'moment';

export class InventoryService {
  static async createItem(data: CreateInventoryDTO): Promise<IInventoryItem> {
    const item = new InventoryModel({
      ...data,
      expiryDate: moment(data.expiryDate).toDate(),
    });
    return await item.save();
  }

  static async getItem(itemId: string): Promise<IInventoryItem | null> {
    return await InventoryModel.findById(itemId);
  }

  static async updateItem(
    itemId: string,
    data: UpdateInventoryDTO
  ): Promise<IInventoryItem | null> {
    const updateData: any = { ...data };
    if (data.expiryDate) {
      updateData.expiryDate = moment(data.expiryDate).toDate();
    }

    return await InventoryModel.findByIdAndUpdate(
      itemId,
      { $set: updateData },
      { new: true, runValidators: true }
    );
  }

  static async deleteItem(itemId: string): Promise<IInventoryItem | null> {
    return await InventoryModel.findByIdAndDelete(itemId);
  }

  static async fillInventory(
    itemId: string,
    quantity: number
  ): Promise<IInventoryItem | null> {
    return await InventoryModel.findByIdAndUpdate(
      itemId,
      { $inc: { quantity } },
      { new: true, runValidators: true }
    );
  }

  static async useInventory(
    itemId: string,
    quantity: number
  ): Promise<IInventoryItem | null> {
    const item = await InventoryModel.findById(itemId);

    if (!item) return null;

    // Check if item is expired
    if (moment().isAfter(item.expiryDate)) {
      throw new Error('Cannot use expired inventory item');
    }

    // Check if enough quantity is available
    if (item.quantity < quantity) {
      throw new Error('Insufficient quantity available');
    }

    return await InventoryModel.findByIdAndUpdate(
      itemId,
      { $inc: { quantity: -quantity } },
      { new: true, runValidators: true }
    );
  }

  static async getExpiredItems(): Promise<IInventoryItem[]> {
    return await InventoryModel.find({
      expiryDate: { $lt: new Date() },
    });
  }
}
