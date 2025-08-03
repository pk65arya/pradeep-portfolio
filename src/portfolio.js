/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Pradeep Kumar Upadhyay",
  title: "Hi all, I'm Pradeep",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web Applications with Java / JavaScript / Reactjs / Nodejs / Springboot and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1_w0lRf6LvuZk54qiChemuCfAVs0_lPIF/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pk65arya",
  linkedin: "https://www.linkedin.com/in/pradeep-kumar-upadhyay/",
  gmail: "pk65arya@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Build robust backend systems with RESTful APIs and integrate basic frontend interfaces for end-to-end application functionality."
    ),
   // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/Render/Netlify."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
   
    //  {
    //    skillName: "Spring Boot",
    //    fontAwesomeClassname: ""
    //  },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
     {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    {
      skillName: "mongo-database",
      fontAwesomeClassname: "fas fa-database"
    },
   
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
     {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
  
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "A N College , Patna",
      logo: require("./assets/images/ancollege.png"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "September 2020 - May 2023",
      desc: "Actively engaged in academics, technical projects, and campus activities to build a strong foundation in engineering and teamwork.",
  
    },
    {
      schoolName: "Masai",
      logo: require("./assets/images/masai_square.png"),
      subHeader: "Training in Full Stack Web Development",
      duration: "February 2025 -  Present",
      desc: "Got hackathon certificate by delivering projects on time and with desired set of results.",
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend/design",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Ventures Consultancy Pvt. Ltd.",
      companylogo: require("./assets/images/ventures.jpg"),
      date: "June 2024 – Jan 2025",
      desc: "Designed and implemented RESTful APIs to handle core hospital operations with complete CRUD functionality.",
      descBullets: [
        "Achieved over 90% test coverage using JUnit and Mockito.",
        "Optimized code using Java 8+ features, modular architecture, and reusable service layers."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Training And Certifications 🏆 "),
  subtitle:
    "A selection of hackathons and training programs I've completed.",

  achievementsCards: [
    {
      title: "xTo10x Hackathon By Masai",
      subtitle:
        "Participated in the xTo10x Hackathon organized by Masai School and developed a full-stack web application as part of a team. Gained practical, collaborating using Git, and delivering a working product within a deadline.",
      image: require("./assets/images/masai_square.png"),
     
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/pk65arya/certificates-/blob/961232c0b15061d26eec0e00d19d7bc874b3abe4/Pradeep%20Kumar%20Upadhyay.jpg"
        }
      ]
    },
    {
      title: "Fresher Employer Bootcamp",
      subtitle:
        "Completed intensive hands-on training in Java, Spring Boot, Microservices architecture, Git, and MySQL through the Fresher Employership Bootcamp Program designed to prepare job-ready backend developers.",
      image: require("./assets/images/bridgelabz.png"),
  
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/pk65arya/certificates-/blob/main/Pradeep-1487999216.png"
        }
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

 const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+916207827848",
  email_address: "pk65arya@gmail.com"
};


const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
