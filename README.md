# Micro Frontend

The project consists of multiple micro frontend built in react js. There are multiple ways in which you can integrated your micro frontend app to the main app or any other application. This repo consists of two different ways how we can integrated the micro app to the main app

### Installation

1. Clone the repo

```
git clone https://github.com/najeen182/micro-frontend.git
```

2. Change directory

```
cd micro-frontend
```

3. Install node modules

```
npm install
```

4. Run Project

- Run project app1

```
cd micro-frontend/app1
npm start
```

Once, the app runs successfully, open the browser

[http://localhost:3000](http://localhost:3000)

if you want to run the app in different port

```
PORT=3002 npm start
```

5. Build app for production

```
npm run build
```

After the build is successfull, `dist` folder is produce. You can upload the dist folder to any server or serve from locally.

Integrate,the app in vanilla js

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div id="my-app-one"></div>
        <script src="../app1/dist/bundle.js"></script>
    </body>
</html>
```

Here, you need two things,

```
<div id="my-app-one"></div>
```

and script

```
<script src="../app1/dist/bundle.js"></script>
```

if remote,

```
<script src="http://[REMOTESERER_IP]/path/bundle.js"></script>
```
