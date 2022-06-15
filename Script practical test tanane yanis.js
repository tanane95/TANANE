db.getCollection("qualite_de_lair_france").find({} , {fields : 1 ,_id:0})
db.getCollection("qualite_de_lair_france").findOne({} ,  {_id:"8", record_timestamp : 1})
db.getCollection("qualite_de_lair_france").find({} , {lib_qual : "Moyen",_id:0})
 db.getCollection("qualite_de_lair_france").find({})
 db.qualite_de_lair_france.find().limit(2)
 db.getCollection("qualite_de_lair_france").find({})
 db.getCollection("qualite_de_lair_france").find({"fields.code_qual": {$lt:4}})
 db.qualite_de_lair_france.find({"fields.code_pm25": {$gte : 2, $eq : 2}})
 db.qualite_de_lair_france.find({"fields.code_pm10": {$ne : 10}})
 db.qualite_de_lair_france.find({"fields.code_no2": {$lt : 2, 	
$eq :2 }})
db.qualite_de_lair_france.find({"fields.code_o3": {$gt : 2}})
 
 