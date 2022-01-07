import components from "./components";

const plugin = {
  install(Vue) {
    for (const key in components) {
        const component = components[key];
        Vue.component(component.name, component);
    }
  },
};

export default plugin;
