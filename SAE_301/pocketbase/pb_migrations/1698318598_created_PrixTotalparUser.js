/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "rf8wbb4d8bv518v",
    "created": "2023-10-26 11:09:58.044Z",
    "updated": "2023-10-26 11:09:58.044Z",
    "name": "PrixTotalparUser",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jjlcw3wt",
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
      "query": "SELECT (ROW_NUMBER() OVER()) as id, SUM(prix) as prix_total FROM Lunette GROUP BY relationUser"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("rf8wbb4d8bv518v");

  return dao.deleteCollection(collection);
})
