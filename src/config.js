module.exports = {
  defaultTitle: "tomas_dev",
  defaultDescription:
    "portafolio de projectos de un desarrollador o programador web en de bolivia",
  author: {
    name: `Tomás Vásquez`,
  },
  banner: {
    FirstName: "Tomás",
    MiddleName: "",
    LastName: "Vásquez",
    devDesc: "| Freelancer | Web Developer | Designer | Vimlover ",
    socialLinks: [
      {
        label: "linkedin",
        icon: "linkedin",
        url: "https://www.linkedin.com/in/tomás-vásquez-8a45471b4",
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
        url: "https://www.linkedin.com/in/tomás-vásquez-8a45471b4",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    portfolioButtomText: "See all",

    portfolioHeading2: "repositories",
    portfolioButtomText2: "See all",

    linkGitHub: "https://.com/tomasdetloging",

    deploys: [
      {
        title: 'Open Academy "CRA"',
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
        image: process.env.PUBLIC_URL + "/projects/capture (2).jpg",
        linkRepo: "https://.com/tomasdetloging/OpenPortafolio",
        linkDemo: "",
      },
      {
        title: "Open Trello",
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

      // {
      //   title: 'Open Academy "NextJs"',
      //   image: "capture (5)",
      //   linkRepo: "https://.com/tomasdetloging/openacademy-nextjs",
      //   linkDemo: "https://open-academy.vercel.app/",
      // },
      // {
      //   title: "Youtube Clone",
      //   image: "capture (6)",
      //   linkRepo: "https://.com/tomasdetloging/Youtube-Clone",
      //   linkDemo: "https://youtube-clone-inky.vercel.app/",
      // },

      // {
      //   title: "Simple Crud Postgres",
      //   image: "capture (8)",
      //   linkRepo: "https://.com/tomasdetloging/simple-crud-postgre",
      //   linkDemo: "https://simple-crud-postgree.herokuapp.com/",
      // },
    ],
  },
  about: {
    aboutHeading: "About me",
    aboutDescription: [
      "My name is Tomás Vásquez and I am specialized in the development and programming of web applications.",
      "Began my academic training at the university studying Informatics Engineering and later studying self-taught in online education platforms, first in EDteam and then in Platzi.",
      "I am currently looking to insert working in the technology area. I am very self-taught and I constantly look for new challenges that challenge my abilities and help me grow.",
    ],
    picUrl: "https://.com/tomasdetloging.png",
    aboutMeButtomText: "See my CV",
    aboutMeButtomText2: "Get my CV",
    cvFileName: "tomasdetloging@gmail.com.pdf",
    discipline: "Developer",
    extraDisciplines: ["Prototyper", "Animator", "Illustrator", "Modder"],
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
