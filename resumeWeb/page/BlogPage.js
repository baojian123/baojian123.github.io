/** @jsx createElement */

const BlogPage = (props) => {
  return (
    <section id={props.pageId} class="page">
      <div class="page__header">
        <h2>Blog</h2>
      </div>
      <div class="page__content">
        <div class="info-temp">
          <h3>Coming Soon</h3>
          <div class="ellipsis">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
var pageLoader = document.querySelector("#page-loader")
pageLoader.appendChild(<BlogPage pageId="blog"/>);
