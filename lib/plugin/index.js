//import MyWorker from './worker/main.worker.js';

const request = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    redirect: 'follow',
    headers: {
        'Content-Type': 'application/json'
    }
};

const newWorker = function (funcObj) {
    var blobURL = URL.createObjectURL(new Blob(['(',

    funcObj.toString(),

        ')()'], {
        type: 'application/javascript'
    })),

        worker = new Worker(blobURL);

    URL.revokeObjectURL(blobURL);

    return worker;
}

const worker = newWorker(function (event) {
  const { id, query } = event.data;
  fetch(query.url, query.request)
      .then(function (response) {
          return response.json();
      }).then(function (json) {
          postMessage({ id, data: json });
      }).catch(function (ex) {
          postMessage({ id, error: ex });
      });
});

//const worker = new MyWorker();
const tasks = {};

worker.addEventListener('message', (event) => {
    const { id, data } = event.data;
    tasks[id].res(data);
    delete tasks[id];
}, false);

const API = {
    fetch: function (url) {
        const id = `${(Math.random() * 1000)}_${Date.now()}`;

        tasks[id] = (() => {
            let res, rej;
            const promise = new Promise(function (resolve, reject) {
                res = resolve;
                rej = reject;
            });
            return {
                promise,
                res,
                rej
            };
        })();

        const query = {
            url: 'http://localhost:3000/api/List',
            request
        };

        worker.postMessage({ id, query });

        return tasks[id].promise;
    }
};

export default API;
