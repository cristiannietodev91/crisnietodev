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
      dateText: "Nov 2022 -  Present",
      technologies: ["Node JS", "KoaJS", "PostgreSQL", "OpenAPI", "Jest"],
      location: "Remote",
      linkProject: {
        link: "https://achieve.macmillanlearning.com/start",
        text: "Achieve"
      },
      description:
        "Work on the migration from domains to micro-services architecture project\
        in the Macmillan client. I work migrating functions to micro-services with\
        NodeJS, KOA and open-api 3.0.",
    },
    {
      id: 2,
      open: true,
      companyName: "Spark Digital",
      clientName: "The knot",
      dateText: "May 2022 - Oct 2022",
      technologies: ["NodeJS", "NestJS" ,"TypeScript", "Contentful"],
      location: "Remote",
      linkProject: {
        link: "https://www.theknot.com/",
        text: "The knot"
      },
      description:
        "Worked on the project of migrating the Knot catalog to Contentful. \
        had to build some jobs with NodeJS and NestJS that connect to the legacy \
        catalog and then migrate the items to Contentful using Contentful \
        GraphQL Content API I worked on the Knot webpage as well which is \
        developed with React my work was mainly in the Catalog page getting \
        the items from Contentful and listed them in the webpage.",
    },
    {
      id: 3,
      open: true,
      companyName: "Deviget LLC",
      clientName: "GoodRx",
      dateText: "Nov 2021 - May 2022",
      technologies: ["React", "Contentful", "TypeScript", "GraphQL", "Styled components", "Chakra UI", "Storybook"],
      location: "Remote",
      linkProject: {
        link: "https://www.goodrx.com/",
        text: "GoodRx"
      },
      description:
        "React developer working with two clients based in Silicon Valley within both clients \
        I work developing totally reusable and accessible React components which are connected to contentful CMS. \
        Here we integrate CMS to React 16 using hooks and GraphQL so each component is represented \
        based on the information received from the CMS gotten with GraphQL",
    },
    {
      id: 4,
      open: true,
      companyName: "Incredible Web",
      clientName: "Casumo",
      dateText: "Jul 2021 - May 2022",
      technologies: ["React", "Contentful", "Storybook"],
      location: "Malta",
      linkProject: {
        link: "https://www.casumo.com/en",
        text: "Casumo",
      },
      description:
        "Worked with the client Casumo on a project that builds custom React components\
        to extend Contentful UI those components were then used by Contentful editors\
        to build Casumo Web pages for different countries and languages.",
    },
    {
      id: 5,
      open: true,
      companyName: "Avantica",
      clientName: "Cision",
      dateText: "Nov 2020 - Oct 2021",
      technologies: ["React", "Redux", "TypeScript", "ES6", "Groovy"],
      location: "Colombia",
      linkProject: {
        link: "https://www.cision.com/about/",
        text: "Cision",
      },
      description:
        "I work for Cision client, a client based in USA that helps all its clients analyze \
        their brand in different mediums of communication \
        and social networks to make better decisions in the market.",
    },
    {
      id: 6,
      open: true,
      companyName: "Dafiti",
      clientName: "Dafiti",
      technologies: ["React"],
      location: "Colombia",
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
      location: "Colombia",
      linkProject: {
        link: "#",
        text: "Chatbot Daviplata",
      },
      description:
        "I was the architect and one of the main developers of a chatbot \
        built with NodeJS that handles the communication of Daviplata's customers. \
        The app uses WebSocket (Socket IO) to share messages among Clients, Agents and the bot. \
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
          dateText={experience.dateText}
          location={experience.location}
          linkProject={experience.linkProject}
          collapsible={false}
        ></ExperienceCard>
      ))}
    </div>
  );
};

export default AccordionExperience;
