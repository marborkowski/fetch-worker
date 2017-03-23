# Fetch Worker

React Fetch Worker is an ES6 *fetch* wrapper that allows you to handle HTTP requests in a separate thread (Web Worker).

`Please note that this module is currently in its early stages of development. Therefore if you think you can help or suggest changes, you will be welcome to contact me :)`

## How to use it


```js
API.fetch('http: //my.api/service.json', { method: 'GET' }).then (
    (response) => {
        console.log(response);
    }
    (reason) => {
        console.warn(reason);
    }
);
```

## References
* https://github.com/github/fetch
