/** @jsx createElement */

const AboutPage = (props) => {
  return (
    <section id={props.pageId} class="page">
    <div class="page__header">
      <h2>About</h2>
    </div>
    </section>
  )
}
var pageLoader = document.querySelector("#page-loader")
pageLoader.appendChild(<AboutPage pageId="about"/>);
