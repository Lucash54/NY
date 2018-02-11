use ny;



db.age.aggregate([{$match : {Age: "20-24"}},{ $project : {2020:1, Age:1,Borough:1 ,_id:0}}, {$out: "aux"}]);
db.age.aggregate([{$match : {Age: "Total"}},{ $project : {2020:1, Age:1,Borough:1 ,_id:0}}, {$out: "aux2"}]);


db.aux.aggregate([
   {
     $lookup:
       {
         from: "aux2",
         localField: "Borough",
         foreignField: "Borough",
         as: "res"
       }
  }, {$out : "final"}]);


db.final.aggregate([
   {
     $addFields: {
       tot: {$arrayElemAt: [ "$res", 0 ]} 
     }}, {$out : "final"}
]);

db.final.aggregate([
   {
     $addFields: {
       tauxjeune: {$divide: [ "$2020", "$tot.2020" ]} 
     }}, {$out : "final"}
]);

  
db.final.aggregate([{ $project: { Borough: 1, tauxjeune:1, _id:0} }, {$sort : {tauxjeune:-1}},{$out:"resultat1"}]);



db.security.createIndex({"LAW_CAT_CD":1});

db.security.aggregate([
  { $match: { LAW_CAT_CD : "FELONY"}}
  ,{ $group: { _id : "$BORO_NM",
             total_felo : {$sum:1}}},{$out :"aux"}]);
             
db.security.aggregate([{ $group: { _id : "$BORO_NM",
             total : {$sum:1}}},{$out : "aux2"}]);             

db.security.distinct( "CRM_ATPT_CPTD_CD" );     

db.security.aggregate([
  { $match: { CRM_ATPT_CPTD_CD : "ATTEMPTED"}}
  ,{ $group: { _id : "$BORO_NM",
             total_attemp : {$sum:1}}},{$out :"aux3"}]);
             
             
             
db.aux.aggregate([
   {
     $lookup:
       {
         from: "aux2",
         localField: "_id",
         foreignField: "_id",
         as: "res"
       }
  },{
     $lookup:
       {
         from: "aux3",
         localField: "_id",
         foreignField: "_id",
         as: "res2"
       }
  },{
     $addFields: {
       tot: {$arrayElemAt: [ "$res", 0 ]},
      aux: {$arrayElemAt: [ "$res2", 0 ]} 
     }}, {$out : "final2"}
]);
  
db.final2.aggregate([
   {
     $addFields: {
       tauxcrime: {$divide: [ "$total_felo", "$tot.total" ]},
      tauxrate: {$divide: [ "$aux.total_attemp", "$tot.total" ]} 
     }}, {$out : "final2"}
]) ; 
     
     
db.final2.aggregate([{ $project: {tauxcrime:1, tauxrate:1, total_plaintes:"$tot.total"} }, {$sort : {tauxcrime:1}},{$out:"resultat2"}]);     


db.getCollection('resultat1').find({});
db.getCollection('resultat2').find({});

     
db.party.createIndex({"Borough":1,"Street Name":1});

db.party.aggregate([{$match : {Borough : "BRONX"}},
    {$group: {_id : "$Street Name", nb:{$sum : 1}}},{$sort : {nb:-1}},{ $limit : 20 }]);     
         
