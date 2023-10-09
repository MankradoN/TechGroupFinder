## Contents

- [Getting started](#getting-started-)
- [Usage](#usage)
- [Project Board](#project)
- [Wiki](#wiki)

---

## Getting started 🐣

To set up and run this project, follow the instructions below.


```bash
# Run this to install Node 16.13.0
nvm install 16.13.0

# Run this to use the installed Node version 
nvm use 16.13.0
```

Run the following commands to start this application after you have cloned the repo:

```bash
# Run the `cd` command to change the current directory to the
# root directory of the repository
docker-compose -f ./docker-compose.yml up -d

# access container
docker exec -it my-react-app /bin/bash

# install dependencies
npm install

# Run this to start your application 
npm start
```

## Project

The tasks in the project are documented on a Kanban Board available here: https://github.com/users/MankradoN/projects/3/views/1

## Wiki

The wiki contains documentation for the project : https://github.com/MankradoN/TechGroupFinder/wiki

## Usage

### Updating configuration

The project is configured via a JSON [config file](src/config/engine.json).  If you would like to make configuration changes, there is no need to regenerate this app from your App Search Dashboard. Additional configuration can be made by modifying that file.

You can simply open up the
[engine.json](src/config/engine.json) file, update the [options](#config),
and then restart this app.

### Configuration options <a id="config"></a>

The following is a complete list of options available for configuration in [engine.json](src/config/engine.json).

| option               | value type    | required/optional | source                                                                                                                                                                                          |
| -------------------- | ------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `engineName`         | String        | required          | Found in your App Search Dashboard.                                                                                                                                                             |
| `endpointBase`       | String        | required*         | (*) Elastic Enterprise Search deployment URL, example: "http://127.0.0.1:3002".                                                                                                                 |
| `searchKey`          | String        | required          | Found in your App Search Dashboard.                                                                                                                                                             |
| `searchFields`       | Array[String] | required          | A list of fields that will be searched with your search term.                                                                                                                                   |
| `resultFields`       | Array[String] | required          | A list of fields that will be displayed within your results.                                                                                                                                    |
| `querySuggestFields` | Array[String] | optional          | A list of fields that will be searched and displayed as query suggestions.                                                                                                                      |
| `titleField`         | String        | optional          | The field to display as the title in results.                                                                                                                                                   |
| `urlField`           | String        | optional          | A field with a url to use as a link in results.                                                                                                                                                 |
| `sortFields`         | Array[String] | optional          | A list of fields that will be used for sort options.                                                                                                                                            |
| `facets`             | Array[String] | optional          | A list of fields that will be available as "facet" filters. Read more about facets within the [App Search documentation](https://www.elastic.co/guide/en/app-search/current/facets-guide.html). |


### If you are checking this project out directly from GitHub... <a id="github"></a>

You can follow the previous steps, but then you will need to create and configure
[engine.json](src/config/engine.json).

To do so, make a copy of [engine.json.example](src/config/engine.json.example),
rename it to `engine.json` and configure it with your Engine's specific details.

```bash
cp src/config/engine.json.example src/config/engine.json
```

