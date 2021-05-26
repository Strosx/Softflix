
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['rVheKyithzfmrSh4U7J4wm'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  