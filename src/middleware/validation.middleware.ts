import { Request, Response, NextFunction } from 'express';
import { body, param, validationResult } from 'express-validator';
import moment from 'moment';

export const validateCreateInventory = [
  body('itemName')
    .trim()
    .notEmpty()
    .withMessage('Item name is required')
    .isString()
    .withMessage('Item name must be a string'),
  body('quantity')
    .notEmpty()
    .withMessage('Quantity is required')
    .isInt({ min: 0 })
    .withMessage('Quantity must be a non-negative integer'),
  body('expiryDate')
    .notEmpty()
    .withMessage('Expiry date is required')
    .custom((value) => {
      if (!moment(value, moment.ISO_8601, true).isValid()) {
        throw new Error('Invalid date format. Use ISO 8601 format');
      }
      if (moment(value).isBefore(moment())) {
        throw new Error('Expiry date must be in the future');
      }
      return true;
    }),
  validateRequest,
];

export const validateUpdateInventory = [
  param('itemId').isMongoId().withMessage('Invalid item ID'),
  body('itemName')
    .optional()
    .trim()
    .isString()
    .withMessage('Item name must be a string'),
  body('quantity')
    .optional()
    .isInt({ min: 0 })
    .withMessage('Quantity must be a non-negative integer'),
  body('expiryDate')
    .optional()
    .custom((value) => {
      if (!moment(value, moment.ISO_8601, true).isValid()) {
        throw new Error('Invalid date format. Use ISO 8601 format');
      }
      if (moment(value).isBefore(moment())) {
        throw new Error('Expiry date must be in the future');
      }
      return true;
    }),
  validateRequest,
];

export const validateQuantityUpdate = [
  param('itemId').isMongoId().withMessage('Invalid item ID'),
  body('quantity')
    .notEmpty()
    .withMessage('Quantity is required')
    .isInt({ min: 1 })
    .withMessage('Quantity must be a positive integer'),
  validateRequest,
];

export const validateItemId = [
  param('itemId').isMongoId().withMessage('Invalid item ID'),
  validateRequest,
];

function validateRequest(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array(),
    });
  }
  next();
}
