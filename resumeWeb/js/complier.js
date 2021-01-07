/** @jsx createElement */

const createElement = (tag, props, ...children) => {
  if (typeof tag === "function") return tag(props, ...children);
  const element = document.createElement(tag);
  Object.entries(props || {}).forEach(([name, value]) => {
    // if(name!=name.toLowerCase()){
    //   console.log(name)
    // }
    if (name.startsWith("on") && name in window){
      element.addEventListener(name.substr(2), value);
    }
    else if(name=="viewBox") {
      //setAttribute will convert attribute to lower case automatically
      element.setAttributeNS("http://www.w3.org/2000/svg", name, value.toString());
    }else{
      element.setAttribute(name, value.toString());
    }
  });

  children.forEach((child) => {
    appendChild(element, child);
  });
  return element;
};

const appendChild = (parent, child) => {
  if (Array.isArray(child))
    child.forEach((nestedChild) => appendChild(parent, nestedChild));
  else
    parent.appendChild(child.nodeType ? child : document.createTextNode(child));
};

const createFragment = (props, ...children) => {
  console.log(children);
  return children;
};
