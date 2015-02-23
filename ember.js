import EmTC from 'ember-template-compiler';

var templateName = function(filename) {
  var split = filename.split('/');
  return split[split.length - 1].split('.')[0];
};

export var translate = function(load) {
  var filename = templateName(load.metadata.pluginArgument);
  console.log(`Compiling template: ${filename}`);
  var template = EmTC.precompile(load.source, false);
  return `import Em from 'ember';
          Em.TEMPLATES['${filename}'] = Em.HTMLBars.template(${template});
          export default Em.TEMPLATES['${filename}'];`;
};
