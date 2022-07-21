## To run Mongodb from WSL 2 Ubuntu

Make a directory to MongoDB store data:
`mkdir -p ~/data/db`

Run a Mongo instance: 
`sudo mongod --dbpath ~/data/db`

Run a Mongo client:
*`mongo`
*`show dbs`
*`use comics`
*`show collections`
*`db.heroes.find()`
