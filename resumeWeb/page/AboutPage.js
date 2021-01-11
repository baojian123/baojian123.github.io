/** @jsx createElement */

const SkillItem = (props) =>{
  return (
    <div class="skill__item">
      <span>{props.skill.name}</span>
      <div class="skill__level">
        <div class={"skill__level-"+props.skill.level}>
        </div>
      </div>
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
  var skillLevel = [
    {
      name:"HTML5",
      level: 4
    },{
      name:"CSS3/SASS",
      level: 4
    },{
      name:"JavaScript",
      level: 4
    },{
      name:"React",
      level: 2
    },{
      name:"Vue",
      level: 3
    },{
      name:"Node.js",
      level: 3
    },{
      name:"Python",
      level: 4
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
          {skillLevel.map((item) => (
            <SkillItem skill={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
var pageLoader = document.querySelector("#page-loader")
pageLoader.appendChild(<AboutPage pageId="about"/>);
// var input = document.querySelector("#name")
// input.oninput= contentBinding.bind(input)(".name")
