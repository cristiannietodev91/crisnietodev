"use client"

import React from 'react'
import Text from '../text/Text'
import TechnologiesCard from '../card/TechnologiesCard'
import SoftSkillContainer from '../container/SoftSkillContainer'
import styles from './About.module.css';

type Props = {}

const About = (props: Props) => {
  return (
    <div>
        <Text
          size="lg"
          variant="primary"
          textAlign="center"
          className={styles.titleAbout}
        >
          About me
        </Text>
        <Text
          size="md"
          variant="primary"
          textAlign="center"
          className={styles.subtitleAbout}
        >
          Full stack developer at Spark
        </Text>
        <Text size="sm" variant="primary" textAlign="justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          quaerat laudantium dolore. At aspernatur maiores ut delectus eos
          repellat sapiente rerum non perferendis voluptatem eum iste id sequi
          nihil doloribus illum, tempore labore libero, explicabo praesentium?
          Doloribus reprehenderit consequuntur laborum perspiciatis, minima
          sapiente culpa, praesentium non amet necessitatibus ipsam a fugiat
          consectetur earum?.
        </Text>
        <TechnologiesCard></TechnologiesCard>
        <SoftSkillContainer></SoftSkillContainer>
    </div>
  )
}

export default About;