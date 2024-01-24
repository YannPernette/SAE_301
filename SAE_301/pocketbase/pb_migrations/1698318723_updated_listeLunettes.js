/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9w76roy7ww3nnix")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, cadre, branches, verres, materiau, prix, relationUser FROM Lunette"
  }

  // remove
  collection.schema.removeField("dowj6xld")

  // remove
  collection.schema.removeField("om1k72u1")

  // remove
  collection.schema.removeField("trduyygj")

  // remove
  collection.schema.removeField("lihaekz1")

  // remove
  collection.schema.removeField("hcaosxt0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pok5yj4p",
    "name": "cadre",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h7rooqxw",
    "name": "branches",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "atvzjkru",
    "name": "verres",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jaevb1jr",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qacklegi",
    "name": "prix",
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
    "id": "pvjp1bij",
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
  const collection = dao.findCollectionByNameOrId("9w76roy7ww3nnix")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, cadre, branches, verres, materiau, relationUser FROM Lunette"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dowj6xld",
    "name": "cadre",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "om1k72u1",
    "name": "branches",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "trduyygj",
    "name": "verres",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lihaekz1",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hcaosxt0",
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

  // remove
  collection.schema.removeField("pok5yj4p")

  // remove
  collection.schema.removeField("h7rooqxw")

  // remove
  collection.schema.removeField("atvzjkru")

  // remove
  collection.schema.removeField("jaevb1jr")

  // remove
  collection.schema.removeField("qacklegi")

  // remove
  collection.schema.removeField("pvjp1bij")

  return dao.saveCollection(collection)
})
