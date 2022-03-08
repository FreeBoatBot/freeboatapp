const commands = require('./command.json')
const loadCmd = require('./custom')
function cmd(cmd) {
loadCmd.load(cmd)
return 'Returned'
}
cmd(commands.allcmd)
