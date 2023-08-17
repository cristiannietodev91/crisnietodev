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
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. \
        Accusantium alias placeat temporibus quo aperiam commodi obcaecati \
        molestiae fugit consectetur sint qui vitae fuga libero, iusto, velit \
        a enim voluptatibus soluta!",
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
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. \
        Accusantium alias placeat temporibus quo aperiam commodi obcaecati \
        molestiae fugit consectetur sint qui vitae fuga libero, iusto, velit \
        a enim voluptatibus soluta!",
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
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. \
        Accusantium alias placeat temporibus quo aperiam commodi obcaecati \
        molestiae fugit consectetur sint qui vitae fuga libero, iusto, velit \
        a enim voluptatibus soluta!",
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
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. \
        Accusantium alias placeat temporibus quo aperiam commodi obcaecati \
        molestiae fugit consectetur sint qui vitae fuga libero, iusto, velit \
        a enim voluptatibus soluta!",
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
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. \
        Accusantium alias placeat temporibus quo aperiam commodi obcaecati \
        molestiae fugit consectetur sint qui vitae fuga libero, iusto, velit \
        a enim voluptatibus soluta!",
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
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. \
        Accusantium alias placeat temporibus quo aperiam commodi obcaecati \
        molestiae fugit consectetur sint qui vitae fuga libero, iusto, velit \
        a enim voluptatibus soluta!",
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
