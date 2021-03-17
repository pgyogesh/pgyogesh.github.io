/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Yogesh Jadhav",
  title: "Hello, This is Yogesh",
  subTitle: emoji("I'm passionate Database Administrator 🚀 who strives to gain professional experience. I’m open-source enthusiast. My passion is to learn new technologies and keep myself up to date in this rapidly changing world. I’m a quick learner. Even though I take my work seriously, I do have a good sense of humour. My interest ranges from reading books, listening to music to exploring new places and people."),
  resumeLink:"https://pgyogesh.github.io/online-cv",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pgyogesh",
  linkedin: "https://www.linkedin.com/in/pgyogesh/",
  gmail: "pgyogesh@outlook.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/4851021/pgyogesh",
  twitter: "https://twitter.com/pgyogesh_",
  instagram: "https://www.instagram.com/wanderercouple_yk/",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY DATABASE ADMINISTRATOR WHO WANTS TO EXPLORE OPEN-SOURCE DATA STACK",
  skills: [
    emoji("⚡ Creating highly highly available, secure and high performance database systems"),
    emoji("⚡ Developing bash and python scripts to automate and monitor the database systems"),
    emoji("⚡ Integration of third party services such as Hadoop / AWS / Azure")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "bash scripting",
      fontAwesomeClassname: "fas fa-hashtag"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Rani Chennamma University",
      logo: require("./assets/images/rcu-logo.jpg"),
      subHeader: "Bachelor of Computer Applications",
      duration: "June 2011 - May 2014",
      desc: "Completed course with distinction",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Greenplum Database Administration", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "PostgreSQL Database Administration",
      progressPercentage: "80%"
    },
    {
      Stack: "Python Programming Langauge",
      progressPercentage: "70%"
    },
    {
      Stack: "Shell Scripting",
      progressPercentage: "60%"
    },
    {
      Stack: "MarkLogic Database Administration",
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
      role: "Senior Database Administration",
      company: "Epsilon India",
      companylogo: require("./assets/images/epsilon-logo.png"),
      date: "May 2018 – Present",
      desc:
        "Epsilon is global marketing company. I joined Epsilon as Senior Database Administrator. Currently I’m managing Greenplum and PostgreSQL Database. I take care of all the day to day activities including performance issues and failures of any severity issues. Also, I’m part of Open source migration team which is working on Automation, Monitoring and Deployments of open source solutions. Teams target to go complete open source for all the solutions like Hadoop and databases. We are using Python programming language for achieving this.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Big Data administrator",
      company: "Broadridge Financial Solutions Pvt. Ltd.",
      companylogo: require("./assets/images/broadridge-logo.png"),
      date: "Oct 2016 – May 2020",
      desc:
        "Broadridge is the leading provider of investor communications, technologydriven solutions, and data and analytics to the financial services industry. I joinedBroadridge as database administrator and I worked on Greenplum, PostgreSQL and Marklogic(NoSQL) database administration. With DBA team, I was also part of newly formed Database Engineering Team which involved into automation and monitoring activities for all the database technologies like Oracle, DB2, PostgreSQL, Marklogicand Greenplum."
    },
    {
      role: "Technical Support Engineer - Greenplum",
      company: "Wipro Technologies",
      companylogo: require("./assets/images/wipro-logo.jpg"),
      date: "Oct 2014 – Oct 2016",
      desc:
        "Wipro Limited is an Indian multinational corporation that provides information technology, consulting and business process services. After my college, I joined Wipro technologies as Technical Support Engineer for Greenplum database for client Pivotal Inc. (Now part of VMWare). During my days here, I supported all the customers of Greenplum database across globe with all severity issues. This is where I got exposer to Greenplum and PostgreSQL."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Solution Architect-Associate",
      subtitle:
        "Completed certification in AWS Solution Architect - Associate Level",
      image: require("./assets/images/aws-cert-logo.png"),
      footerLink: [
        {
          name: "Certificate",
          url:
            "https://www.youracclaim.com/badges/750f4b7d-d5bc-4660-8eb1-d8686841a55f/public_url"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Managing databases and Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://pgyogesh.github.io/blog/greenplum/python/parallel-restore-using-python/",
      title: "Greenplum Parallel Restore Using Python",
      description:
        "Python program to parallel restore greenplum backup in dissimilar number of segment instances. This script has all recommended steps by Pivotal."
    },
    {
      url:
        "https://pgyogesh.github.io/blog/postgresql/pgauth/",
      title: "It’s backend process that authenticates users in PostgreSQL… Not Postmaster Process…",
      description:
        "I was confused on how authentication in PostgreSQL works. So, I did some research."
    },
    {
      url:
        "https://pgyogesh.github.io/blog/greenplum/python/GPOPB/",
      title: "GPOPB: Greenplum Object Processing in Bulk",
      description:
        "Python utility to process Greenplum objects in bulk and in parallel."
    },
    {
      url: "https://pgyogesh.github.io/blog/postgresql/python/parallel-analyze-postgres/",
      title: "Running parallel analyze on PostgreSQL Database",
      description:
        "Python program to run analyze on multiple tables in parallel for PostgreSQL Database."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7676777797",
  email_address: "pgyogesh@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "pgyogesh_", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
