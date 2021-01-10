/** @jsx createElement */

const AboutPage = (props) => {
  return (
    <section id={props.pageId} class="page">
      <div class="page__header">
        <h2>About</h2>
      </div>
      <div class="page__content">
        <div id="about__experience">

        </div>
        <div id="about__skills">

        </div>
      </div>
    </section>
  );
}
var pageLoader = document.querySelector("#page-loader")
pageLoader.appendChild(<AboutPage pageId="about"/>);
// var input = document.querySelector("#name")
// input.oninput= contentBinding.bind(input)(".name")
