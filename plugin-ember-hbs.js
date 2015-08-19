import EmTC from 'ember/ember-template-compiler';

export var translate = function(load) {
  if (load.metadata.pluginArgument) {
    console.log(`Compiling template: ${load.metadata.pluginArgument}`);
  } else {
    console.log(`Compiling template: ${load.address}`);
  }
  var template = EmTC.precompile(load.source, false);
  return `import Ember from 'ember';\nexport default Ember.HTMLBars.template(${template});`;
};
