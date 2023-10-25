/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8yo5rc4jwjh8s3y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x5vehpid",
    "name": "relationUser",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8yo5rc4jwjh8s3y")

  // remove
  collection.schema.removeField("x5vehpid")

  return dao.saveCollection(collection)
})
