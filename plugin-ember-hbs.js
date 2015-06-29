import Ember from 'ember';
import 'ember/ember-template-compiler';

export var translate = function(load) {
  console.log(`Compiling template: ${load.metadata.pluginArgument}`);
  var template = Ember.HTMLBars.precompile(load.source, false);
  return `import Ember from 'ember';\nexport default Ember.HTMLBars.template(${template});`;
};
