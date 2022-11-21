// Make NW.js and Node globals available in Vue
export default function applyPrototypes (component) {
  component.isDesktop = Boolean(window.nw);
  if (window.nw) {
    component.nw = window.nw;
    component.process = window.nw.process;
    component.require = window.nw.require;
    component.global = global;
  }
  return component;
}
