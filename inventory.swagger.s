{
    "openapi": "3.0.0",
    "info": {
        "title": "Inventory Management API",
        "version": "1.0.0",
        "description": "API for managing inventory with CRUD operations and additional features."
    },
    "paths": {
        "/inventory": {
            "post": {
                "summary": "Create Inventory Item",
                "description": "Add a new item to the inventory.",
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "itemName": {
                                        "type": "string"
                                    },
                                    "quantity": {
                                        "type": "integer"
                                    },
                                    "expiryDate": {
                                        "type": "string",
                                        "format": "date"
                                    }
                                },
                                "required": [
                                    "itemName",
                                    "quantity",
                                    "expiryDate"
                                ]
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "Inventory item created successfully."
                    },
                    "400": {
                        "description": "Invalid input."
                    }
                }
            }
        },
        "/inventory/{itemId}": {
            "get": {
                "summary": "Read Inventory Item",
                "description": "Fetch details of a specific inventory item.",
                "parameters": [
                    {
                        "name": "itemId",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Inventory item details."
                    },
                    "404": {
                        "description": "Inventory item not found."
                    }
                }
            },
            "put": {
                "summary": "Update Inventory Item",
                "description": "Update the details of an existing inventory item.",
                "parameters": [
                    {
                        "name": "itemId",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "itemName": {
                                        "type": "string"
                                    },
                                    "quantity": {
                                        "type": "integer"
                                    },
                                    "expiryDate": {
                                        "type": "string",
                                        "format": "date"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Inventory item updated successfully."
                    },
                    "400": {
                        "description": "Invalid input."
                    },
                    "404": {
                        "description": "Inventory item not found."
                    }
                }
            },
            "delete": {
                "summary": "Delete Inventory Item",
                "description": "Remove an inventory item from the system.",
                "parameters": [
                    {
                        "name": "itemId",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Inventory item deleted successfully."
                    },
                    "404": {
                        "description": "Inventory item not found."
                    }
                }
            }
        },
        "/inventory/{itemId}/fill": {
            "post": {
                "summary": "Fill Inventory",
                "description": "Add stock to an existing inventory item.",
                "parameters": [
                    {
                        "name": "itemId",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "quantity": {
                                        "type": "integer"
                                    }
                                },
                                "required": [
                                    "quantity"
                                ]
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Inventory item filled successfully."
                    },
                    "400": {
                        "description": "Invalid input."
                    },
                    "404": {
                        "description": "Inventory item not found."
                    }
                }
            }
        },
        "/inventory/{itemId}/use": {
            "post": {
                "summary": "Use Inventory",
                "description": "Deduct stock from an existing inventory item.",
                "parameters": [
                    {
                        "name": "itemId",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "quantity": {
                                        "type": "integer"
                                    }
                                },
                                "required": [
                                    "quantity"
                                ]
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Inventory item used successfully."
                    },
                    "400": {
                        "description": "Invalid input or item expired."
                    },
                    "404": {
                        "description": "Inventory item not found."
                    }
                }
            }
        },
        "/inventory/expired": {
            "get": {
                "summary": "Check Expired Inventory",
                "description": "Retrieve all expired inventory items.",
                "responses": {
                    "200": {
                        "description": "List of expired inventory items."
                    }
                }
            }
        }
    }
}