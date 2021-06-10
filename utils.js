const commands = require('./command');
const _ = require('lodash');

exports.checkForCommand = (commandString) => {
    let foundCommand = _.find(commands, cmd => RegExp("^\\$" + cmd, 'i').test(commandString));
    return foundCommand;
}
