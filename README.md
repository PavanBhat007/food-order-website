# Food order website (WSA)

## Steps
1. **`terminal-1$ cd frontend`**
2. **`terminal-1/frontend$ npm i`**
3. **`terminal-1/frontend$ npm start`**
4. **`terminal-2$ cd Backend-obfuscated`**
5. **`terminal-2/Backend-obfuscated$ npm i`**
6. **`terminal-2/Backend-obfuscated$ npm start`**

## Importing base dataset into MongoDB
1. Open MongoDB Compass (easier to work with).
2. Connect to the **`mongodb://localhost:27017/`** (ensure backend is running).
3. There will be a **_internship_** folder, in which empty databases will be initialized.
4. Select any one of them (For example: **_restaurants_**).
5. Click on **_Add Data_** -> **_Import JSON/CSV_** -> select the **`Database\Internship.restaurants.json`** (for this example).
6. The data from the JSON file will be loaded into the mongoDB database. Do the same for the remaining 2 JSON files in the **_Database_** folder.