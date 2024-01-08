import 'zone.js/testing';

const context = require.context('./', true, /\.spec\.ts$/);
context.keys().map(context);