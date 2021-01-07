/** @jsx createElement */

const AboutPage = (props) => {
  return (
    <section id={props.pageId} class="page">
    </section>
  )
}
var pageLoader = document.querySelector("#page-loader")
pageLoader.appendChild(<AboutPage pageId="about"/>);
