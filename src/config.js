module.exports = {
  banner: {
    FirstName: "Tomas",
    MiddleName: "",
    LastName: "Vásquez",
    socialLinks: [
      {
        label: "linkedin",
        icon: "linkedin",
        url: "https://www.linkedin.com/in/-tomas-vasquez-",
      },
      {
        label: "Github",
        url: "https://github.com/tomas-vasquez",
        icon: "github",
      },
      {
        label: "",
        icon: "wathsapp",
        url: "https://api.whatsapp.com/send?phone=59177649384",
      },
      {
        label: "",
        icon: "gmail",
        url: "mailto:tomasdetloging@gmail.com",
      },
    ],
  },

  navbar: {
    links: [
      {
        label: "About",
        target: "#details",
      },
      {
        label: "Projects",
        target: "#projects",
      },
      {
        label: "Contact",
        target: "#contact",
      },
    ],

    socialLinks: [
      {
        label: "linkedin",
        icon: "linkedin",
        url: "https://www.linkedin.com/in/tomas-vasquez",
      },
      {
        label: "Github",
        url: "https://github.com/tomas-vasquez",
        icon: "github",
      },
      {
        label: "",
        icon: "wathsapp",
        url: "https://api.whatsapp.com/send?phone=59177649384",
      },
      {
        label: "",
        icon: "gmail",
        url: "mailto:tomasdetloging@gmail.com",
      },
    ],
  },

  portfolio: {
    portfolioHeading: "projects",
    portfolioText:
      "I love creating small projects that help me develop my skills, here I show you some projects that I made results from different courses and bootcamps in which I participated:",
    portfolioButtomText: "See all",

    portfolioHeading2: "repositories",
    portfolioButtomText2: "See all",

    linkGitHub: "https://.com/tomasdetloging",

    deploys: [
      {
        title: 'Open Academy "CRA"',
        description:
          "My first project, an online education platform using React, Express and MongoDB",
        image: process.env.PUBLIC_URL + "/projects/capture (7).jpg",
        linkRepo: "https://.com/tomasdetloging/OpenAcademy-ReactApp",
        linkDemo: "https://open-academy-react-app.vercel.app/",
      },

      {
        title: "Open Social Network",
        image: process.env.PUBLIC_URL + "/projects/capture (7).jpg",
        linkRepo: "https://.com/tomasdetloging/social-network-v123",
        linkDemo: "https://social-network-v123.vercel.app/",
      },
      {
        title: "Open Portafolio",
        description:
          "My first professional portfolio created in 2019 using react with the gatsby.js framework",
        image: process.env.PUBLIC_URL + "/projects/capture (2).jpg",
        linkRepo: "https://.com/tomasdetloging/OpenPortafolio",
        linkDemo: "https://tomas-dev.vercel.app/",
      },
      {
        title: "Open Trello",
        description:
          "Small project that is a task application, I created it using React, Express and mongoDB",
        image: process.env.PUBLIC_URL + "/projects/capture (1).jpg",
        linkRepo: "https://.com/tomasdetloging/OpenTrello",
        linkDemo: "https://open-trello.vercel.app/",
      },
      {
        title: "Particle image example",
        image: process.env.PUBLIC_URL + "/projects/capture (3).jpg",
        linkRepo: "https://.com/tomasdetloging/",
        linkDemo: "https://particle-effect.vercel.app/",
      },
      {
        title: "Youtube Clone",
        description:
          "Project carried out in a workshop of React and connections to apis. ",
        image: process.env.PUBLIC_URL + "/projects/capture (6).jpg",
        linkRepo: "https://.com/tomasdetloging/Youtube-Clone",
        linkDemo: "https://youtube-clone-inky.vercel.app/",
      },

      {
        title: "Simple Crud Postgres",
        description:
          "project carried out with some fellow students. A university admin using Express.js and Postgre.",
        image: process.env.PUBLIC_URL + "/projects/capture (8).jpg",
        linkRepo: "https://.com/tomasdetloging/simple-crud-postgre",
        linkDemo: "https://simple-crud-postgree.herokuapp.com/",
      },

      {
        title: 'Open Academy "NextJs"',
        description:
          "The biggest project that I will carry out, an online education platform made with React and Next.js on the frontend; Express.js and MongoDB in the backend and Electron and React in the administrative tool.",
        image: process.env.PUBLIC_URL + "/projects/capture (5).jpg",
        linkRepo: "https://.com/tomasdetloging/openacademy-nextjs",
        linkDemo: "https://open-academy.vercel.app/",
      },
    ],
  },
  about: {
    aboutHeading: "about me",
    aboutTitle: "Who I am?",
    aboutDescription: [
      "My name is Tomás Vásquez and I am specialized in the development and programming of web applications.",
      "Began my academic training at the university studying Informatics Engineering and later studying self-taught in online education platforms, first in EDteam and then in Platzi.",
      "I am currently looking to insert working in the technology area. I am very self-taught and I constantly look for new challenges that challenge my abilities and help me grow.",
    ],
    aboutMeButtomText2: "Download my CV",
    cvFileUrl: process.env.PUBLIC_URL + "/tomasdetloging@gmail.com.pdf",

    discipline: "Developer",
    extraDisciplines: ["Designer", "Teacher", "Marketer", "Pianist"],
    music: {
      musicHeading: "some music",
      musicTitle: " What music do I like?",
      musicText:
        "In my country, Bolivia, very beautiful music is heard ... but it is not well known in the world ... here are some songs",
      musicTextFooter: "music is an art that comes from the soul ...",
    },
  },
  blog: {
    blogHeading: "Posts",
    blogButtomText: "See all posts",
  },
  skills: {
    skillsHeading: "Skills",
    mySkills: [
      {
        name: "javascript",
        value: 90,
        icon: "js",
        color: "orange",
      },
      {
        name: "nodejs",
        value: 90,
        icon: "node",
        color: "green",
      },
      { name: "React", value: 90, icon: "react", color: "#3992e6" },
      {
        name: "Angular",
        value: 80,
        icon: "angular",
        color: "#d81010",
      },
      { name: "Vue", value: 60, icon: "vuejs", color: "green" },
      {
        name: "bootstrap",
        value: 95,
        icon: "bootstrap",
        color: "#6d0c6d",
      },
    ],
  },

  contactMe: {
    contactMeTitle: "Do you want to contact me?",
    contactMeText:
      'You can send me an email to the address: <a href="mailto:tomasdetloging@gmail.com">tomasdetloging@gmail.com</a><br /> or you can also contact me through my social networks:',
  },
  footer: {
    locationTitle: "My location",
    location:
      "Neighborhood Estación Argentina  # 456 \n - Santa Cruz - Bolivia",
    socialLinksTitle: "My social networks",
    aboutTitle: "About Open-Portfolio",
    about:
      'This portfolio is open source... clone the repository: <a href="https://.com/tomasdetloging/OpenPortafolio">open-portafolio</a>',
  },
  wathsappWidged: {
    buttoms: [
      {
        href: "https://www.twitter.com/_tomasvasquez_",
        tooltip: "My Twitter",
        style: {
          backgroundColor: "#17a2b8",
          color: "rgb(250, 250, 250)",
        },
        icon: "twitter",
      },
      {
        href: "mailto:tomasdetloging@gmail.com",
        tooltip: "Send email",
        style: {
          backgroundColor: "#117a8b",
          color: "rgb(250, 250, 250)",
        },
        icon: "gmail",
      },
      {
        href: "https://api.whatsapp.com/send?phone=59177649384",
        tooltip: "Send message",
        style: {
          backgroundColor: "#28a745",
          color: "rgb(250, 250, 250)",
        },
        className: " fa-2x",
        icon: "wathsapp",
      },
    ],
  },
};
