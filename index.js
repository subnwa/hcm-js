class hcmjs {
  constructor() {}

  log(...args) {
    return;
  }

  debug(...args) {
    return;
  }

  info(...args) {
    return;
  }

  warn(...args) {
    return;
  }

  error(...args) {
    return;
  }

  console(...args) {
    args = [...args];
    this.console
  }

  api(...args) {
    api.error(console.log("API error."))
  }

}

module.exports = hcmjs;
