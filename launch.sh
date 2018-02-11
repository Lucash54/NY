sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5

echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list

sudo apt-get update

sudo apt-get install -y mongodb-org

mkdir data



wget -O ./data/age.csv https://data.cityofnewyork.us/api/views/97pn-acdf/rows.csv?accessType=DOWNLOAD
wget -O ./data/party.csv https://data.cityofnewyork.us/api/views/edr3-7w6x/rows.csv?accessType=DOWNLOAD
wget -O ./data/security.csv https://data.cityofnewyork.us/api/views/5uac-w243/rows.csv?accessType=DOWNLOAD

sudo service mongod start

mongoimport --db ny --collection age --drop --type csv --headerline --file ./data/age.csv
mongoimport --db ny --collection party --drop --type csv --headerline --file ./data/party.csv
mongoimport --db ny --collection security --drop --type csv --headerline --file ./data/security.csv



mongo < scriptmongo.js
