# Feature Document

## Create Inventory item | FD

The Create Inventory API is a tool used to add new items to an inventory. It allows users to input important details about an item, such as:

- **Name**: The name of the item being added to the inventory.
- **Quantity**: The number of units of the item available.
- **Expiry Date**: The date when the item will no longer be usable or safe to use.

Once these details are provided, the system saves the information in a central database. This helps businesses keep track of their items, monitor their stock levels, and manage the shelf life of products. Essentially, the API ensures that inventory records are updated and organized, making it easier to manage and track the availability of items.

## Read Inventory item | FD

The **Read Inventory Item API** allows users to retrieve detailed information about a specific item in the inventory. Here's how it works:

- **User Input**: The user provides the unique ID of the inventory item they wish to look up.
- **System Action**: The system uses this ID to search for and retrieve the details of the item from the inventory database.
- **Item Details**: If the item exists, the system returns relevant information, such as the item name, quantity, and expiry date.

This API helps users quickly access and review specific inventory items based on their unique ID, ensuring that the information is easily accessible and up-to-date. If the item is not found, the system will notify the user accordingly.

## Update Inventory Item | FD

The **Update Inventory API** allows users to modify the details of an existing inventory item. Here's how it works:

- **User Input**: The user provides the unique ID of the inventory item they want to update, as well as the new details (such as name, quantity, and expiry date) in the request.
- **System Action**: The system searches for the inventory item using the provided ID and updates its details in the database with the new information.
- **Updated Item Details**: After the update, the system saves the changes and ensures that the inventory records reflect the latest information.

This API helps businesses keep their inventory up-to-date by allowing them to make changes to item details as necessary, such as adjusting the quantity, updating the item name, or changing the expiry date.

## Delete Inventory Item | FD

The **Delete Inventory Item API** allows users to remove a specific inventory item from the system. Here's how it works:

- **User Input**: The user provides the unique ID of the inventory item they want to delete.
- **System Action**: The system uses the provided ID to locate and delete the corresponding item from the inventory database.
- **Item Removal**: Once the item is deleted, it is permanently removed from the inventory, and the system updates the records accordingly.

This API helps businesses manage their inventory by allowing them to delete items that are no longer needed, ensuring the inventory remains accurate and up-to-date. If the item ID is not found, the system will notify the user.

## Fill inventory | FD

The **Update Inventory Quantity API** allows users to increase the quantity of a specific inventory item. Here's how it works:

- **User Input**: The user provides the unique ID of the inventory item they want to update, along with the amount to be added to the current quantity.
- **System Action**: The system locates the item using the provided ID and adds the specified quantity to the existing stock.
- **Updated Quantity**: After the update, the inventory records reflect the new quantity, ensuring the item’s availability is accurately tracked.

This API helps businesses manage their stock levels by allowing them to increase the quantity of items when new stock is received, keeping inventory records up-to-date and accurate. If the item ID is not found, the system will notify the user.

## Use Inventory | FD

The **Update Inventory Quantity (Remove) API** allows users to decrease the quantity of a specific inventory item. Here's how it works:

- **User Input**: The user provides the unique ID of the inventory item they want to update, along with the amount to be removed from the current quantity.
- **System Action**: The system locates the item using the provided ID and subtracts the specified quantity from the current stock.
- **Updated Quantity**: After the update, the inventory records reflect the new quantity, ensuring accurate tracking of available stock.

This API helps businesses manage inventory by allowing them to reduce stock levels when items are sold, used, or otherwise removed, ensuring that inventory records stay accurate. If the item ID is not found, or if there is insufficient stock, the system will notify the user.

## Check Expired Inventory | FD

The **Get Expired Inventory Items API** helps users identify items in the inventory that have passed their expiry date. Here's how it works:

- **System Action**: The API checks the expiry date of all items in the inventory.
- **Filtering**: It retrieves a list of items whose expiry date is earlier than the current date, indicating they have expired.
- **Returned List**: The system returns a list of expired items, which may include item details like name, quantity, and expiry date.

This API is helpful for businesses to quickly identify and manage expired products in the inventory, ensuring that expired items are removed or handled appropriately.
