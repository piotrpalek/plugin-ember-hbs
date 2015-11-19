import EmTC from 'ember/ember-template-compiler';

export var translate = function(load) {
  if (load.metadata.pluginArgument) {
    console.log(`Compiling template: ${load.metadata.pluginArgument}`);
  } else {
    console.log(`Compiling template: ${load.address}`);
  }
  var template;
  if(EmTC.precompile) {
    template = EmTC.precompile(load.source, false);
  } else if(EmTC.Handlebars.precompile) {
    template = EmTC.Handlebars.precompile(load.source, false);
  } else if(EmTC.HTMLBars.precompile) {
    template = EmTC.HTMLBars.precompile(load.source, false);
  }

  return `var Em = require('ember');\nmodule.exports = Em.HTMLBars.template(${template});`;
};
