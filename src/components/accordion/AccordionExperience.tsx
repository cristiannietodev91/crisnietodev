import React from "react";
import ExperienceCard from "../card/ExperienceCard";
import styles from "./AccordionExperience.module.css";

type Props = {};

const AccordionExperience = (props: Props) => {
  const experiences = [
    {
      id: 1,
      open: false,
      companyName: "Company name 1",
      technologies: ["Tech 1", "Tech 2", "Tech 3"],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. \
        Accusantium alias placeat temporibus quo aperiam commodi obcaecati \
        molestiae fugit consectetur sint qui vitae fuga libero, iusto, velit \
        a enim voluptatibus soluta!",
    },
    {
      id: 2,
      open: true,
      companyName: "Company name 2",
      technologies: ["Tech 1", "Tech 2", "Tech 3"],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. \
        Accusantium alias placeat temporibus quo aperiam commodi obcaecati \
        molestiae fugit consectetur sint qui vitae fuga libero, iusto, velit \
        a enim voluptatibus soluta!",
    },
    {
      id: 3,
      open: false,
      companyName: "Company name 3",
      technologies: ["Tech 1", "Tech 2", "Tech 3"],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. \
        Accusantium alias placeat temporibus quo aperiam commodi obcaecati \
        molestiae fugit consectetur sint qui vitae fuga libero, iusto, velit \
        a enim voluptatibus soluta!",
    },
  ];
  return (
    <>
      {experiences.map((experience) => (
        <ExperienceCard
          open={experience.open}
          key={experience.id}
          className={styles.item}
          companyName={experience.companyName}
          technologies={experience.technologies}
          description={experience.description}
        ></ExperienceCard>
      ))}
    </>
  );
};

export default AccordionExperience;
