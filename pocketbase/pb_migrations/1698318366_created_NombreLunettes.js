/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1c3kcoraaq1wfwo",
    "created": "2023-10-26 11:06:06.368Z",
    "updated": "2023-10-26 11:06:06.368Z",
    "name": "NombreLunettes",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rdggsi9p",
        "name": "NombreLunettes",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id, COUNT(Lunette.id) as NombreLunettes FROM Lunette"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1c3kcoraaq1wfwo");

  return dao.deleteCollection(collection);
})
