import EmTC from 'ember-template-compiler';

export var translate = function(load) {
  if (load.metadata.pluginArgument) {
    console.log(`Compiling template: ${load.metadata.pluginArgument}`);
  } else {
    console.log(`Compiling template: ${load.address}`);
  }
  var template = EmTC.precompile(load.source, false);
  return `import Em from 'ember';\nexport default Em.HTMLBars.template(${template});`;
};
