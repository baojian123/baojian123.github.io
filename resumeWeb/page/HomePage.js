/** @jsx createElement */

const HomePage = (props) => {
  return (
    <section id={props.pageId} class="page">
      <input id="name" value="1"/>
      <div class="name">123
      </div>
    </section>
  );
}
var pageLoader = document.querySelector("#page-loader")
pageLoader.appendChild(<HomePage pageId="home"/>);
var input = document.querySelector("#name")
input.oninput= contentBinding.bind(input)(".name")
