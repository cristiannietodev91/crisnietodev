import React from "react";
import ExperienceCard from "../card/ExperienceCard";
import styles from "./AccordionExperience.module.css";
import cx from "classnames";

type Props = {
  className?: string;
};

const AccordionExperience = ({ className }: Props) => {
  const experiences = [
    {
      id: 1,
      open: true,
      companyName: "Spark Digital",
      clientName: "Macmillan Education",
      technologies: ["Node JS", "KoaJS", "PostgreSQL", "OpenAPI"],
      location: "Remote",
      linkProject: {
        link: "https://achieve.macmillanlearning.com/start",
        text: "Achieve"
      },
      description:
        "Work in the migration from domains architecture to micro-services\
        work migrating functions to micro-services with NodeJS, KOA and open-api 3.0",
    },
    {
      id: 2,
      open: true,
      companyName: "Spark Digital",
      clientName: "The knot",
      technologies: ["Node JS", "TypeScript", "Contentful"],
      location: "Remote",
      linkProject: {
        link: "https://www.theknot.com/",
        text: "The knot"
      },
      description:
        "Worked on the project of migrating the knot catalog to Contentful. \
        had to build some jobs with NodeJS and NestJS that connect to the legacy catalog \
        and then migrate the items to Contentful using Contentful GraphQL Content API \
        I worked on the knot webpage as well which is developed with React \
        my work was mainly in the Catalog page getting the items\
        from Contentful and listed them in the webpage",
    },
    {
      id: 3,
      open: true,
      companyName: "Deviget LLC",
      clientName: "GoodRx",
      technologies: ["React", "Contentful", "TypeScript"],
      location: "Remote",
      linkProject: {
        link: "https://www.goodrx.com/",
        text: "GoodRx"
      },
      description:
        "Develop totally reusable accessible react components which are connected to Contentful CMS. \
        Each component that I worked on gets info from Contentful using the Contentful GraphQL Content API",
    },
    {
      id: 4,
      open: true,
      companyName: "Incredible Web",
      clientName: "Casumo",
      technologies: ["React", "Contentful"],
      location: "Malta",
      linkProject: {
        link: "https://www.casumo.com/en",
        text: "Casumo",
      },
      description:
        "Pending to update the description",
    },
    {
      id: 5,
      open: true,
      companyName: "Avantica",
      clientName: "Cision",
      technologies: ["React"],
      location: "Bogota D.C - Colombia",
      linkProject: {
        link: "https://www.cision.com/about/",
        text: "Cision",
      },
      description:
        "I worked with React, ES6, TypeScript, Redux, Groovy, and MySql. My main function \
        was to develop new features that Cision app offers to its clients in the technologies named before\
        Cision clients use the app to analyze its own brand in different \
        mediums of communication and social networks. ",
    },
    {
      id: 6,
      open: true,
      companyName: "Dafiti",
      clientName: "Dafiti",
      technologies: ["React"],
      location: "Bogota D.C - Colombia",
      linkProject: {
        link: "https://www.dafiti.com.co",
        text: "Dafiti",
      },
      description:
        "I worked helping different software projects in Dafiti Latam developing software in different technologies\
         like Node JS, PHP, and Java I worked on different projects with them as the PWA of Dafiti Store built with React and Redux\
         and other internal software projects with (NodeJS, React, Hooks).",
    },
    {
      id: 7,
      open: true,
      companyName: "4Smart",
      clientName: "daviplata",
      technologies: ["NodeJS", "AWS"],
      location: "Bogota D.C - Colombia",
      linkProject: {
        link: "#",
        text: "Chatbot Daviplata",
      },
      description:
        "I was the architect and one of the main developers of a chatbot \
        built with NodeJS that handles the communication of Daviplata's customers. \
        The app uses WebSocket (Socket IO) to share messages among Clients, Agents and the bot \
        The app connects to a trained IBM Watson bot using its API. The app supports around 2 million messages\
        per hour",
    },
  ];
  return (
    <div className={cx({ ...(className && { [className]: true }) })}>
      {experiences.map((experience) => (
        <ExperienceCard
          open={experience.open}
          key={experience.id}
          className={styles.item}
          companyName={experience.companyName}
          technologies={experience.technologies}
          description={experience.description}
          clientName={experience.clientName}
          location={experience.location}
          linkProject={experience.linkProject}
          collapsible={false}
        ></ExperienceCard>
      ))}
    </div>
  );
};

export default AccordionExperience;
