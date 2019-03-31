'use strict';

console.log('App.js is running');

var app = {
    title: 'New Indecision App!',
    subTitle: 'Try it out today!',
    options: ['One', 'Two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subTitle && React.createElement(
        'p',
        null,
        app.subTitle
    ),
    React.createElement(
        'p',
        null,
        app.options && app.options.length > 0 ? 'Here are your options:' : 'No Options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            app.options[0]
        ),
        React.createElement(
            'li',
            null,
            app.options[1]
        )
    )
);

var user = {
    name: 'Pramod',
    age: 34,
    location: 'New York'
};
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location : ',
            location
        );
    }
}
var userTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name.toUpperCase() : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};
var countRender = document.getElementById('count');
var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Reset'
        )
    );
    ReactDOM.render(templateTwo, countRender);
};
renderCounterApp();

var appRoot = document.getElementById('app');
var userInfo = document.getElementById('user');

ReactDOM.render(template, appRoot);
ReactDOM.render(userTemplate, userInfo);
