/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8yo5rc4jwjh8s3y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jzmyljt2",
    "name": "materiau",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8yo5rc4jwjh8s3y")

  // remove
  collection.schema.removeField("jzmyljt2")

  return dao.saveCollection(collection)
})
