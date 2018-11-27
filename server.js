#!/usr/bin/env node
var prerender = require('./lib');

var server = prerender({
    port: 3010,
    chromeFlags: ['--no-sandbox', '--headless', '--disable-gpu', '--remote-debugging-port=9222', '--hide-scrollbars'],
    onStdout: function (data) {
        // console.log('ee' + data)
    },
    onStderr: function (data) {
        // console.error(data)
    }
});

server.use(prerender.sendPrerenderHeader());
// server.use(prerender.blockResources());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.start();
