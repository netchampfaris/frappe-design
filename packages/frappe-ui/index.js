import * as components from './components';

let FrappeUI = {};

FrappeUI.install = (Vue, options = {}) => {
  if (!options.componentPrefix) {
    options.componentPrefix = 'f';
  }
  // register all components
  for (const componentName in components) {
    const component = components[componentName];
    let componentNameInDashCase =
      options.componentPrefix + '-' + toDashCase(componentName);

    if (component) {
      Vue.component(componentName, component);
      Vue.component(componentNameInDashCase, component);
    }
  }
};

function toDashCase(str) {
  let out = str.replace(/[A-Z]/g, m => '-' + m.toLowerCase());
  if (out[0] === '-') {
    out = out.slice(1);
  }
  return out;
}

export default FrappeUI;
