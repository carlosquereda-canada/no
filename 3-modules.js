// modules
//CommonJS - every file is module by default
const names = require("./firstModule.js")

names.sayHi(names.john)
names.sayHi(names.peter)
names.sayHi("susan")