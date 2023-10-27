# Technical Test Backend DrEnvio 

Technical test for the company DRENVIO. This project is an API created in Node.js, Express and Mongoose, which aims to present the solution to the proposed challenge.



## Installation

1. Clone this repo.
```
git clone https://github.com/cristianps1988/drenvio-challenge.git
```
2. Move inside to the directory.
```
cd drenvio-challenge
```
3. Run `npm install` to install the dependencies.
```
npm install
```

## Use
1. Add the enviroment variables to a .env file. The example is in the file .env.example. Reeplace <<YourParssword>> for your password

2. Run `npm start` for start the server.
```
npm run start
```
3. Open `http://localhost:4000` in your web browser.
4. For run the test run `npm run test`
```
npm run test
```

## EndPoints


- /products : Returns all products that are currently in stock.
- /prices/:user_id/:product_brand : return the special price for the given client and brand, if available. If the client doesn't have a special price for the brand, return the base price.

### Test Data
- user_id = 653ad5fa280a1c26daf39b76
- product_brand = asics

## Deploy
- https://