module.exports = {
  findNestedDependencies: true,
  baseUrl: './assets/js',
  mainConfigFile: './assets/js/main.js',
  dir: './assets/js/dist',
  modules: [
    {
      name: 'main',
      include: [
        'jquery',
        'cokies',
        'backbone',
        'marrionette',
        'underscore',
        'text',
        'router'
      ]
    }
  ]
};