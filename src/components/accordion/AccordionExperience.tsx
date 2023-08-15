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
      open: true,
      companyName: "Company name 3",
      technologies: ["Tech 1", "Tech 2", "Tech 3"],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. \
        Accusantium alias placeat temporibus quo aperiam commodi obcaecati \
        molestiae fugit consectetur sint qui vitae fuga libero, iusto, velit \
        a enim voluptatibus soluta!",
    },
    {
      id: 4,
      open: true,
      companyName: "Company name 4",
      technologies: ["Tech 1", "Tech 2", "Tech 3"],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. \
        Accusantium alias placeat temporibus quo aperiam commodi obcaecati \
        molestiae fugit consectetur sint qui vitae fuga libero, iusto, velit \
        a enim voluptatibus soluta!",
    },
    {
      id: 5,
      open: true,
      companyName: "Company name 4",
      technologies: ["Tech 1", "Tech 2", "Tech 3"],
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
          collapsible={false}
        ></ExperienceCard>
      ))}
    </div>
  );
};

export default AccordionExperience;
