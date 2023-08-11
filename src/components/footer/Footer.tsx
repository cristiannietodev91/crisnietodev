import React from 'react'
import Text from '../text/Text'
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <span className={styles.footer}>
     <Text size='xs' textAlign='center'>&#169; 2023 Copyright - Designed & built by Cristian Nieto</Text>
    </span>
  )
}

export default Footer