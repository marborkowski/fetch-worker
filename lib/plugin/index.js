const request = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    redirect: 'follow',
    headers: {
        'Content-Type': 'application/json'
    }
};

const tasks = {};

const onmessage = function(event) {
    const { id, query } = event.data;
    fetch(query.url, query.request)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            postMessage({ id, data: json });
        }).catch(function (ex) {
            postMessage({ id, error: ex });
        });
}

const blob = new Blob([`onmessage = ${String(onmessage)}`], {
    type: "text\/javascript"
});

const worker = new Worker(
  URL.createObjectURL(blob)
);

worker.addEventListener('message', (event) => {
    const { id, data } = event.data;
    tasks[id].res(data);
    delete tasks[id];
}, false);

const API = {
    fetch: function (url, req = request) {
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
            url: url || 'http://localhost:3000/api/List',
            request: req
        };

        worker.postMessage({ id, query });

        return tasks[id].promise;
    }
};

export default API;
