/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cen6fi6mky6wyuw")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, COUNT(Lunette.id) as NombreLunettes, name FROM Lunette, users WHERE users.id = Lunette.relationUser GROUP BY relationUser"
  }

  // remove
  collection.schema.removeField("yej3lv3y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "riidypf1",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h0fx0rjf",
    "name": "name",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cen6fi6mky6wyuw")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, COUNT(Lunette.id) as NombreLunettes FROM Lunette GROUP BY relationUser"
  }

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("riidypf1")

  // remove
  collection.schema.removeField("h0fx0rjf")

  return dao.saveCollection(collection)
})
