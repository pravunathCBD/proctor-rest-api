import { Document } from 'mongoose';

export interface IInventoryItem extends Document {
  itemName: string;
  quantity: number;
  expiryDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateInventoryDTO {
  itemName: string;
  quantity: number;
  expiryDate: string;
}

export interface UpdateInventoryDTO {
  itemName?: string;
  quantity?: number;
  expiryDate?: string;
}

export interface QuantityUpdateDTO {
  quantity: number;
}

export interface APIResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: any;
}
