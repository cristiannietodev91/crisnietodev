import React from 'react'
import { Text } from "@cristian.nieto.dev/cs-forms";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <span className={styles.footer}>
     <Text size='sm' textAlign='center'>&#169; 2024 Copyright - Designed & built by Cristian Nieto</Text>
    </span>
  )
}

export default Footer