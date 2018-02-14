
Online Book Store
=======
# BookWorm
Bookstore built with karaken, express, mongoose, dust and foundation.

## Prerequisites

* [MongoDB](https://www.mongodb.com/download-center?jmp=nav#atlas) - The database is setup locally. 

### Install the MongoDB.

run the downloaded file.

### Setup MongoDB.

create a separate folder called mongo in desired location.  
Afterwards add 2 folders for database data and log files. remember path to these folders you will need them.

go to the folder where mongodb was installed. On windows default is ("C:/Program Files/MongoDB/Server/VERSION NUMBER/).
access bin folder. For convenience you could add path to bin to environment variables. 

run command 

`mongod --directoryperdb --dbpath "PATH TO DATA FOLDER" --logpath "PATH TO LOG FOLDER" --logappend --install`

after mongod is started you can open second command line to open the mongo shell.

### Run the Database.

to enter the mongo shell enter the bin location and run mongo. 

or simply run mongo in you have already added bin path to env variables.

### Insert Data.

First Create collection.

`db.CreateCollection('books');`

Afterwards add books to Collection. 

`db.books.insert({title:"", description: "", category: "",author: "", publisher: "", price: "", cover: ""});`

don't forget to add cover images in public/img/ folder.

now we need to start the server and see the results.

### Start NPM.

run "npm start" in root directory

`npm start`

### Enjoy.

![BookWorm](Capture.PNG?raw=true "BookWorm")

