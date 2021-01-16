/** @jsx createElement */
//import svg using img cannot change the color of svg.
//so that we can do that via using svg as a mask in a div
//and change the bgcolor of that div
const ResumePage = (props) => {
  var demographicInfo = [{
    "id": "demographic__leetcode",
    "key":"LeetCode",
    "value":"https://leetcode.com/Ian-Chen/"
  },{
  //   "id": "demographic__residence",
  //   "key":"Residence",
  //   "value":"China"
  // },{
    "id": "demographic__address",
    "key":"Address",
    "value":"Chatswood, Sydney"
  },{
    "id": "demographic__email",
    "key":"Email",
    "value":"Zhian.Chen-1@student.uts.edu.au"
  },{
    "id": "demographic__phone",
    "key":"Phone",
    "value":"0450072939"
  },]
  return (
    <section id={props.pageId} class="page">
      <div id="resume__avatar">
        <img src="https://avatars3.githubusercontent.com/u/15513124?s=460&u=18f116600ffb8eacd4bcbbd8fb73c9f1a6c14ad3&v=4" alt=""/>
      </div>
      <div id="resume__info">
        <div id="info__name">
          <h1>Zhian Chen</h1>
        </div>
        <div id="info__position"><p>FrontEnd-Developer</p></div>
        <div id="info__socials">
          <a href="https://www.linkedin.com/in/ian-chen-904567183/">
            <div class="icon icon--linkin" title="Linkin Account: Ian Chen"></div>
          </a>
          <a href="https://github.com/baojian123">
            <div class="icon icon--github" title="GitHub Account: baojian123"></div>
          </a>
          <a href="https://www.instagram.com/baojian123/">
            <div class="icon icon--instagram" title="Ins Accound: baojian123"></div>
          </a>
        </div>
      </div>
      <div id="resume__intro">
        <div id="intro__description">
          <div id="description__header">
            <h2>About <span class="color-lb">Me</span>
            </h2>
          </div>
          <div id="description__content">
            <p>Hello! I’m Zhian Chen. I am a web developer who is creative and passionate with exploring new tech. The data visualization is the thing which I enjoy doing. I have a good ability on overcoming challenges and delivering.</p>
          </div>
        </div>
        <ul id="intro__demographic">
          {demographicInfo.map( (item) => (
            <DemographicItem id={item.id} key={item.key} value={item.value}/>)
          )}
        </ul>
      </div>

    </section>
  );
}

const DemographicItem = (props) => {
  return (
    <li id={props.id}>
    <span class="key">{props.key}</span>
    <span class="value">{props.value}</span>
    </li>
  )
}

var pageLoader = document.querySelector("#page-loader");
pageLoader.appendChild(<ResumePage pageId="resume"/>);
var infoName = document.querySelector("#user-name");
infoName.oninput = contentBinding.bind(infoName)("#info__name>h1");
