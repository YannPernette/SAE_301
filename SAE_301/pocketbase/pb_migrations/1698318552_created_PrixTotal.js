/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "n9tl57y23ujp6h6",
    "created": "2023-10-26 11:09:12.178Z",
    "updated": "2023-10-26 11:09:12.178Z",
    "name": "PrixTotal",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ykrxjnco",
        "name": "prix_total",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id, SUM(prix) as prix_total FROM Lunette"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("n9tl57y23ujp6h6");

  return dao.deleteCollection(collection);
})
