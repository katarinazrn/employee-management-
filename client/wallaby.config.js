module.exports = function (wallaby) {

    return {
        autoDetect: true,
        files: [
            'src/**/*.js'
        ],


        // for node.js tests you need to set env property as well
        // https://wallabyjs.com/docs/integration/node.html
    };
};