# plugin-ember-hbs

SystemJS plugin for Ember Handlebars

### Installation
```
jspm install hbs=github:n-fuse/plugin-ember-hbs
```
### Usage

Note: This plugin imports Ember from the `ember` namespace. So it has to be mapped in your `System.config`

```javascript
System.config({
  map: {
    ember: "path/to/ember/lib"
  }
});
```

#### Import compiled template as variable

```javascript
import indexTpl from './index.hbs!';
import componentTpl from './component.hbs!';

Ember.TEMPLATES.index = indexTpl;

Ember.Component.create({
  layer: componentTpl
});

```

###License
[MIT license](LICENSE.txt)
