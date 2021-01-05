/** @jsx createElement */
/*** @jsxFrag createFragment */

const createElement = (tag, props, ...children) => {
  if (typeof tag === "function") return tag(props, ...children);
  const element = document.createElement(tag);
  Object.entries(props || {}).forEach(([name, value]) => {
    if (name.startsWith("on") && name.toLowerCase() in window)
      element.addEventListener(name.toLowerCase().substr(2), value);
    else element.setAttribute(name, value.toString());
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

const UsingFragment = () => (
  <div>
    <p>This is regular paragraph</p>
    <div>
      <p>This is a paragraph in a fragment</p>
      <p>Hello</p>
      <ul>
        {[1, 2, 3, 4].map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

document.querySelector(".header").appendChild(<UsingFragment data="2" name="foo" />);
