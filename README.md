
# option-challenge-front  
  

## About this  
  

Project of API Rest for query search from YouTube API. Built on Express (version 4.16).  
  

## Build Setup   
  

 ### Using local environment  
    

Requires Node (tested on version 13) and Yarn  
  

```bash  
# install dependencies  
$ yarn install  
# start in dev mode with hot reload at localhost:3000  
$ yarn dev  
# start in production mode at localhost:3000    
$ yarn start  
# perform test tasks
$ yarn test  
```  
  

 ### Using Docker Compose (Recommended)  
  

Requires Docker-CE (tested on version 20) and Docker Compose  (tested on version 1.27.4)  
  

```bash  
# build image  
$ docker-compose build  
# run detached  
$ docker-compose up -d  
```  
  

## Environment values  
  

Set this values in the `.env` file at root folder before start the run-time:  
  

| Value | Description | Default |  
|-------|-------------|---------|  
| `YOUTUBE_KEY` | API Key provided by GCP |  `<secret>`  |  
| `CORS_SITES` | List of sites allowed to send CORS requests |  `*`  |  
  

## Brief of development process

* The project is based on Express, a simple and lightweight web server.
* Docker was used to isolate the project and dependence from the system and other projects (like the front end). Also, is more easy to deploy and run with Docker  Compose (build and up).
* The Google API library is used for more easy and consistent use of service. Even when the library has the option to consume multiple services, only the Youtube Data API is authenticated and consumed.
*  Some values are set as environment variables, to prevent share sensible data (as API Key) when the repo is published.
* A JSON Schema is used to validate the query from the request.
* End-2-end test are added, to perform validation of the endpoint for some scenarios. This type of test was choose to perform the actions which the front end project could request.

## Usage  

The dev server will expose at `http://localhost:3000`

### Endpoints

#### Youtube API

    GET	http://localhost:3000/yt

Params

| Param | Description | Type | Required |
|--|--|--|--|
| searchQuery | Terms of search | String | Yes |
| pageToken | Token for page to fetch | String | No |

Response

 - 200: JSON object with results
 - 500: HTML with descriptive error

> Written with [StackEdit](https://stackedit.io/).
