//replace-in-file for bootstrap replacement replace-config.js
module.exports = {
    from: /@import \"/g,
    to: '@import \"../node_modules/bootstrap/scss/',
};
