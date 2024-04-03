
# Tags Explorer

Tag Explorer is a web application that allows you to use the Stack Exchange API. The main purpose of the application is to display a table of tags related to the Stack Exchange platform. Users can sort tags, resize the table and use pagination to view larger data sets.

### Technologies used:
* React.js
* Material-UI
* Storybook


## License

Distribution and modification of the code is prohibited. All rights reserved.


## Run Locally

Clone the project

```bash
  git clone 
```

Go to the project directory

```bash
  cd tags-explorer
```

Install dependencies

```bash
  npm ci / npm install
```
### Run React App
Start the server

```bash
  npm start
```

### Run Storybook
The project includes Storybook, which allows you to easily browse user interface components. To launch Storybook, use the command:

```bash
  npm run storybook
```
## API Reference

#### Base URL

```https
  GET https://api.stackexchange.com/2.3/tags
```

#### Get tags

```https
  GET ?page=${pageNumber}&pagesize=${pageSize}&order=${sortedData}&sort=popular&site=stackoverflow
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `pageNumber`      | `number` | **Required**. Pagination of individual table pages |
| `pageSize`      | `number` | **Required**. Number of tags in a table on one page |
| `sortedData`      | `string` | **Required**. Sort table ascending or descending |

## Documentation

[Documentation](https://api.stackexchange.com/docs/tags)