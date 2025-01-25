import mongoose from 'mongoose';
import { IInventoryItem } from '../types/inventory.types';

const inventorySchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: [true, 'Item name is required'],
      trim: true,
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [0, 'Quantity cannot be negative'],
    },
    expiryDate: {
      type: Date,
      required: [true, 'Expiry date is required'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Index for faster expiry date queries
inventorySchema.index({ expiryDate: 1 });

// Index for faster item name searches
inventorySchema.index({ itemName: 1 });

export const InventoryModel = mongoose.model<IInventoryItem>(
  'Inventory',
  inventorySchema
);
