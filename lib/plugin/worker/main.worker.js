
/* global onmessage */
/* eslint no-unused-vars: 0, no-native-reassign: 0 */

onmessage = function (event) {
    const { id, query } = event.data;
    fetch(query.url, query.request)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            postMessage({ id, data: json });
        }).catch(function (ex) {
            postMessage({ id, error: ex });
        });
};
