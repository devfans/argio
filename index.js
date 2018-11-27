'use strict'

module.exports = function parse() {
  var params = { subcommands: [] };
  var cur = null;
  process.argv.forEach(function(p) {
    if (p.startsWith('--')) {
      cur = null;
      params[p.substr(2)] = true
    } else if (p.startsWith('-')) {
      cur = p.substr(1)
    } else if (cur === null) {
      params.subcommands.push(p)
    } else if (params[cur] === undefined){
      params[cur] = [p]
    } else if (Array.isArray(params[cur])) {
      params[cur].push(p)
    } else {
      console.log('Parameter with values confict with switches: ' + cur + ' value: ' + p)
    }
  })
  return {
    params,
    get (name ) {
      return Array.isArray(params[name]) ? params[name][0] : params[name]
    },
    subcommand: params.subcommands[2]
  }
}
