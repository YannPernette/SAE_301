/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "cen6fi6mky6wyuw",
    "created": "2023-10-26 11:06:52.351Z",
    "updated": "2023-10-26 11:06:52.351Z",
    "name": "NombreLunettesParUser",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yej3lv3y",
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
      "query": "SELECT (ROW_NUMBER() OVER()) as id, COUNT(Lunette.id) as NombreLunettes FROM Lunette GROUP BY relationUser"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cen6fi6mky6wyuw");

  return dao.deleteCollection(collection);
})
