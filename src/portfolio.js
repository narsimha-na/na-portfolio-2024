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
  username: "Narsimha Reddy S",
  title: "Hi all, I'm Narsimha Reddy S",
  subTitle: emoji(
    "A seasoned developer with over 4 years of experience, I excel in building user-friendly and scalable web and mobile applications using Flutter and MERN.  I've thrived in both startup and established company environments, spearheading projects like a user-friendly crypto marketplace and healthcare access apps. My ability to deliver successful MVPs and drive user engagement makes me a valuable asset for any team."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/narsimha-na",
  linkedin: "https://www.linkedin.com/in/narsimha-reddy-s-3976b113a/",
  gmail: "snarsimhareddy98@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    "⚡I designed and built numerous prototypes and applications for crypto and NFTs. Notably, I spearheaded the creation of a user-friendly marketplace where FITT tokens serve as the currency for buying and selling NFTs.",
    "⚡ I have deeloped many mobile & and web applications for POC'S & MVP and pushed more than 5 mobile applications on to both Google play store and Apple store. ",
    "⚡ Delivered 2 Minimum Viable Products (MVPs) within a tight timeframe (45-60 days) and successfully transitioned them to production-ready applications",
    "⚡ Worked on different Web App POCs like live streaming and Video Calls using WebRTC and some other services according to requirements that are rolled out during the pandemic.",
    "⚡ Worked on Complex UI, Custom Animations, Maps, live user tracking, and app notifications in our Flutter App.",
    "⚡ I spearheaded the enhancement of our company’s Flutter App, introducing innovative features and resolving glitches to ensure seamless access for employees seeking timely medical attention and connectivity with healthcare professionals during the challenging times of COVID-19 outbreaks",
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  langSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "Dart",
      fontAwesomeClassname: "logos:dart",
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "logos:python",
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "logos:html-5",
    },

    {
      skillName: "CSS",
      fontAwesomeClassname: "logos:css-3",
    },
    {
      skillName: "MySQL-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
  ],
  frameworksSkills: [
    {
      skillName: "Flutter",
      fontAwesomeClassname: "logos:flutter",
    },
    {
      skillName: "ReactJs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "NodeJs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },

    {
      skillName: "Tailwind CSS",
      fontAwesomeClassname: "devicon:tailwindcss",
    },
    {
      skillName: "Jest",
      fontAwesomeClassname: "logos:jest",
    },
    {
      skillName: "GraphQL",
      fontAwesomeClassname: "devicon-plain:graphql",
    },
    {
      skillName: "NextJS",
      fontAwesomeClassname: "devicon:nextjs",
    },
    {
      skillName: "three.js",
      fontAwesomeClassname: "skill-icons:threejs-light",
    },
  ],
  develperTools: [
    {
      skillName: "Android Studio",
      fontAwesomeClassname: "devicon:androidstudio",
    },
    {
      skillName: "VS code",
      fontAwesomeClassname: "devicon:vscode",
    },
    {
      skillName: "Xcode",
      fontAwesomeClassname: "devicon:xcode",
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "devicon:git",
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "bi:github",
    },
  ],
  hostingTools: [
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "logos:aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "logos:firebase",
    },
    {
      skillName: "Google Play Console",
      fontAwesomeClassname: "logos:google-play-console-icon",
    },
    {
      skillName: "Apple store",
      fontAwesomeClassname: "logos:apple-app-store",
    },
  ],

  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Institute of Aeronautical Engineering",
      logo: require("./assets/images/skill.svg"),
      subHeader: " Bachelors in Computer Science",
      duration: "Sep 2016 - June 2020",
      desc: "",
      descBullets: [
      ]
    },
    {
      schoolName: "Kendriya Vidyalaya",
      logo: require("./assets/images/skill.svg"),
      subHeader: "High School",
      duration: "September 2013 - April 2017",
      desc: "Sep 2016 - Oct 2020",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
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
      role: " Full Stack Developer",
      company: "MaveX",
      companylogo: require("./assets/images/mavex.png"),
      date: "Sep 2019 – April 2021",
      desc: "Developed both Native Android App & Web App (React JS) for both client and admin facing side for DIY events platform keeping stability & future scalability in mind.We crafted two mobile MVP applications from inception, meticulously refining them before unveiling them to our community for rigorous product validation and bug detection. This pre-public rollout ensured a seamless transition to the final production build.",
    },
    {
      role: "UI Developer",
      company: "Tata MD",
      companylogo: require("./assets/images/tatamd.jfif"),
      date: "May 2021 – Present",
      desc: "I spearheaded the enhancement of our company’s Flutter App, introducing innovative features and resolving glitches to ensure seamless access for employees seeking timely medical attention and connectivity with healthcare professionals during the challenging times of COVID-19 outbreaks.Worked on different Web App POCs like live streaming and Video Calls using WebRTC and some other services according to requirements that are rolled out during the pandemic.Rapidly built essential Flutter apps to empower frontline workers in effectively managing medical emergencies within organizations.",
    },
    {
      role: "SDE",
      company: "Ftimint",
      companylogo: require("./assets/images/fitmint_app_logo.png"),
      date: "May 2021 – Present",
      desc: "As part of a founding team at a Web3 company, I designed and built numerous prototypes and applications for crypto and NFTs. Notably, I spearheaded the creation of a user-friendly marketplace where FITT tokens serve as the currency for buying and selling NFTs.Developed a Dashboard for 3D avatars and Support side applications using NextJS for managing the users for our support team.Delivered 2 Minimum Viable Products (MVPs) within a tight timeframe (45-60 days) and successfully transitioned    them to production-ready applications.",
    },
  ],

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
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "FITMINT",
      projectDesc: "Get Paid to Walk & Run: Turn your steps into real rewards! It lets you get money by simply walking and running, making every step count towards a healthier lifestyle and a wealthier you.Crypto Rewards: Experience the power of cryptocurrency with Fitmint. Redeem your owned FITT tokens in popular cryptocurrencies",
      footerLink: [
        {
          name: "Visit App",
          url: "https://play.google.com/store/apps/details?id=com.fitmint.app",
        }
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Rush",
      projectDesc: "Introducing Rush, the revolutionary trivia game that matches you with opponents, tests your knowledge on various topics, and rewards you with crypto for winning.",
      footerLink: [
        {
          name: "Visit App",
          url: "https://play.google.com/store/apps/details?id=com.fitmint.rush"
        }
        //  you can add extra buttons here.
      ]
    },

    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Tata MD",
      projectDesc: "Tata MD is a friendly healthcare app designed to provide holistic healthcare needs for Elderly, Women. Men, Child and manage your Chronic Care. Services offered: Manage care services in continuous, connected, proactive, close-to-patient and delivering patient-centric care Online & In-clinic Doctor Consultations-",
      footerLink: [
        {
          name: "Visit App",
          url: "https://play.google.com/store/apps/details?id=com.tatamd.urbancare",
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Tata MD",
      projectDesc: "Tata MD is a friendly healthcare app designed to provide holistic healthcare needs for Elderly, Women. Men, Child and manage your Chronic Care. Services offered: Manage care services in continuous, connected, proactive, close-to-patient and delivering patient-centric care Online & In-clinic Doctor Consultations-",
      footerLink: [
        {
          name: "Visit App",
          url: "https://play.google.com/store/apps/details?id=com.tatamd.urbancare",
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "MAVEX",
      projectDesc: "MaveX app lets you book tickets to all those huge and tiny events happening around you within seconds. It brings events related to music, sports, arts, technology, and a lot more to you from around the country. \n I have developed android applicaiton,Web applicaitons & API services for this start-up",
      footerLink: [
        {
          name: "Visit Web",
          url: "https://mavex.club/",
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
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
  number: "+91 7989412625",
  email_address: "snarsimhareddy98@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
