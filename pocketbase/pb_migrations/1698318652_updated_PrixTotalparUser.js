/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rf8wbb4d8bv518v")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, SUM(prix) as prix_total, name FROM Lunette, users WHERE users.id = Lunette.relationUser GROUP BY relationUser"
  }

  // remove
  collection.schema.removeField("jjlcw3wt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qnf3aji1",
    "name": "prix_total",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hkk7ejcl",
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
  const collection = dao.findCollectionByNameOrId("rf8wbb4d8bv518v")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, SUM(prix) as prix_total FROM Lunette GROUP BY relationUser"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jjlcw3wt",
    "name": "prix_total",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("qnf3aji1")

  // remove
  collection.schema.removeField("hkk7ejcl")

  return dao.saveCollection(collection)
})
