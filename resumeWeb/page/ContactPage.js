/** @jsx createElement */

const ContactPage = (props) => {
  return (
    <section id={props.pageId} class="page">
    </section>
  )
}
var pageLoader = document.querySelector("#page-loader")
pageLoader.appendChild(<ContactPage pageId="contact" />);
