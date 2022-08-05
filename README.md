# ANNEA API
## _Queries data from turbines operation_


The API is in charge of reading different CSV files with turbines data, like indicators, variables & times, and allows the user to easily query data via GET requests. Powered with NodeJS & NestJS. Right now it allows to work only with previously uploaded CSV files, but it is made in a way that in the future, it will allow the user to upload & select the file to work with.

## Features & Usage

- The app allows the users to select which CSV file to work with & make different queries to the data.
- To select the file yo can GET request the URL ```<ip>:<port>/turbines/read_file/<fileName>.csv```

- Once the file is selected, you can start querying the data by making a GET request to <ip>:<port>/turbines/ that it would return ALL the rows 
- To make more advanced queries, you can send Query parameters to the GET request with the name of the column or other varaibles. For example a GET request to ```<ip>:<port>/turbines/?startDate=2017-01-03 02:30:00&endDate=2017-01-03 07:40:00&minIndicator=99.99918568682843&maxIndicator=99.99933574202548&turbine_id=41```


## Query variables accepted

Add any of the foolowinf variables to the /turbines request

| Variable | Description |
| ------ | ------ |
| turbine_id | Turbine's id |
| indicator | Turbine's indicator |
| variable | Turbine's variable |
| timestamp | To search a specific date & time |
| startDate | To search starting from a specific date & time |
| endDate | To search up to a specific date & time |
| maxIndicator | To search up to a specific indicator value |
| minIndicator | To search starting from a specific indicator value |

## Tech

This API uses a number of open source projects to work properly:

- [Typescript](https://www.typescriptlang.org/) - Strongly typed programming language that builds on Javascript
- [NodeJS](https://nodejs.org/en/) - JavaScript runtime environment.
- [NestJS](https://nestjs.com/) - Web Framework for NodeJS, based on Typescript & inspired by Angular
- [Snyk](https://snyk.io/) - Tool to check the code's security

## Application Structure
__src/__ - This folder contains all the sources of the API.
__dist/__ - This folder contains the minimized version of the source code.
__src/turbines/__ - This folder contains all files related to the Turbines module & logic.
__files/__ - This folder contains the files that are avaible to query into the API.
## Installation

This API requires NPM/Yarn to run.

Install & run it locally.

```sh
git clone https://github.com/dbores3/annea
cd annea/
npm i
npm run start:dev
```

## Dependencies

This API is currently extended with the following dependencies.
Instructions on how to use them in your own application are linked below.

| Dependency | URL |
| ------ | ------ |
| class-transformer | https://github.com/nestjs/class-transformer |
| class-validator | https://github.com/typestack/class-validator |
| papaparse | https://www.papaparse.com/ |

127.0.0.1
```
