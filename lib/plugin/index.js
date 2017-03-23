let worker;

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

const blob = new Blob(
    [`onmessage = ${String(onmessage)}`],
    {
        type: "text\/javascript"
    }
);

if (self.Worker) {
    worker = new Worker(
        URL.createObjectURL(blob)
    );
} else {
    worker = {
        listener: null,
        addEventListener: (eventType, callback) => {
            worker.listener = callback;
        },
        postMessage: (input) => {
          const { id, query } = input;
          fetch(query.url, query.request)
              .then(function (response) {
                  return response.json();
              }).then(function (json) {
                  worker.listener({
                      data: {
                          id,
                          data: json
                      }
                  });
              }).catch(function (ex) {
                  worker.listener({
                      data: {
                          id,
                          error: ex
                      }
                  });
              });
        }
    }
}

worker.addEventListener('message', (event) => {
    const { id, data } = event.data;

    tasks[id].promise.then(() => {
        delete tasks[id];
    });

    tasks[id].res(data);
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
            url: url || `http://localhost:3000/api/List?${Math.random()}`,
            request: req
        };

        worker.postMessage({ id, query });

        return tasks[id].promise;
    }
};

export default API;
