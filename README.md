# NY
Projet nosql



L’endroit que je recherchais était un quartier jeune et qui bouge. Je souhaitais pouvoir sortir et me sociabiliser facilement tout en restant dans un quartier sûr évidemment. Après quelques recherches concernant les agressions, la moyenne d’age des habitants par quartier et les événements liés à la musique en général sur le site opendata, j’ai décidé de choisir 3 bases de données correspondant à mes critères : une regroupant toutes les plaintes recueillis par la police de New-York, une autre enregistrant les données et prédictions démographiques de chaque arrondissement, et enfin les plaintes pour tapage nocturne.

L’objectif est de trouver un quartier où la population future sera jeune (comparaison du taux de 20-24ans dans la population totale de chaque quartier). De plus, il faut un nombre de plaintes faible et parmi ces plaintes un taux faible de crime (critère de sûreté du quartier). Je recherche aussi si les plaintes sont sur des événements ayant eu lieu où uniquement des tentatives ratées (arrêté par la police ou autre). Une fois l’arrondissement choisi, je cherche une rue où il y a régulièrement des tapages nocturnes pour être sûr d’être dans un quartier qui bouge.

J’avais également regardé pour récupérer les adresses des studios de musique mais les données n’étaient disponible uniquement en xml alors que j’ai travaillé avec des csv.


En lancant launch.sh (avec scriptmongo,js dans le même dossier), on récupère alors le top 20 des rues du Bronx (arrondissement choisi) où j’aimerai habiter par ordre de préférence décroissant :

Grand Concourse, Morris Avenue, Walton Avenue, University Avenue, Davidson Avenue, Holland Avenue, Valentine Avenue, Sheridan Avenue, Gerard Avenue, Bryant Avenue, Decatur Avenue, Creston Avenue, Grand Avenue, Webster Avenue, Taylor Avenue, Washington Avenue, Beach Avenue, Prospect Avenue, Sherman Avenue.
