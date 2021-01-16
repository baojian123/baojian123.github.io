/** @jsx createElement */

const SkillItem = (props) =>{
  return (
    <div class="skill__item" title={props.skill.name} style={"-webkit-mask: url("+props.skill.url+")"}>
    </div>
  )
}

const TimelineItem = (props) => {
  return (
    <div class={props.item.active? "timeline__card active":"timeline__card"}>
      <div class="timeline__header"><h4>{props.item.header}</h4></div>
      <div class="timeline__info">
        <span class="timeline__time">
          {props.item.time}
        </span>
        <a href={props.item.locLink} title={props.item.locTitle}>
          <span class="timeline__location">
            {props.item.location}
          </span>
        </a>
      </div>
      <div class="timeline__content">
        <p>{props.item.content}</p>
      </div>
    </div>
  )
}

const AboutPage = (props) => {
  var educationTimeline = [
    {
      header:"Bachelor of Software Engineering",
      time:2014,
      active:true,
      location:"ZHBIT",
      locTitle:"Bejing Institute of Technology, Zhuhai Campus",
      locLink:"https://www.linkedin.com/school/beijing-institute-of-technology-zhuhai/?originalSubdomain=au",
      content:"Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.",
    },{
      header:"Master of Information Technology",
      time:2019,
      active:false,
      location:"UTS",
      locTitle:"University of Technology Sydney",
      locLink:"https://www.uts.edu.au/",
      content:"Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.",
  }]
  var skillList = [
    {
      name:"HTML5",
      url: "asset/skills/html5.svg"
    },{
      name:"CSS3",
      url: "asset/skills/css3.svg"
    },{
      name:"SASS",
      url: "asset/skills/sass.svg"
    },{
      name:"JavaScript",
      url: "asset/skills/javascript.svg"
    },{
      name:"Node.js",
      url: "asset/skills/node-dot-js.svg"
    },{
      name:"React",
      url: "asset/skills/react.svg"
    },{
      name:"Vue.js",
      url: "asset/skills/vue-dot-js.svg"
    },{
      name:"D3.js",
      url: "asset/skills/d3-dot-js.svg"
    },{
      name:"MongoDB",
      url: "asset/skills/mongodb.svg"
    },{
      name:"MySQL",
      url: "asset/skills/mysql.svg"
    },{
      name:"Google Cloud",
      url: "asset/skills/googlecloud.svg"
    },{
      name:"Amazon AWS",
      url: "asset/skills/amazonaws.svg"
    },{
      name:"Python",
      url: "asset/skills/python.svg"
    },{
      name:"Tensorflow",
      url: "asset/skills/tensorflow.svg"
    },]
  return (
    <section id={props.pageId} class="page">
      <div class="page__header">
        <h2>About</h2>
      </div>
      <div class="page__content">
        <div id="about__education">
          <h3>Education</h3>
          <div id="education__timeline">
            {educationTimeline.map((item) =>(
                <TimelineItem item = {item}/>
              )
            )}
          </div>
        </div>
        <div id="about__skills">
          <h3>Skills</h3>
          <div class="skill__content">
            {skillList.map((item) => (
              <SkillItem skill={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
var pageLoader = document.querySelector("#page-loader")
pageLoader.appendChild(<AboutPage pageId="about"/>);
// var input = document.querySelector("#name")
// input.oninput= contentBinding.bind(input)(".name")
