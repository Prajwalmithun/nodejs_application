# nodejs_applicaton 

Clone the repository using the following command 
```
git clone https://github.com/Prajwalmithun/nodejs_application.git

cd nodejs_application
```

## How to run the application? 
### Method 1 : Without Docker 

1. Install the dependencies using the following command 
```
npm install
```
2. Run the application using the following command 
```
node index.js
```
3. Open the browser and navigate to the following URL 
```
http://localhost:3000
```

### Method 2: Using Docker 

1. Build the docker image using the following command 
```
docker build -t nodejs_application .
```
2. Run the docker container using the following command 
```
docker run -p 3000:3000 nodejs_application
```
3. Open the browser and navigate to the following URL 
```
http://localhost:3000
```

