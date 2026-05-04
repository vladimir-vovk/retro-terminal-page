'use client'

import { useEffect } from 'react'
import styles from './header-effect.module.css'
import { run, unmount } from './starry-night'

export const HeaderEffect = () => {
  useEffect(() => {
    run()

    return () => {
      unmount()
    }
  }, [])

  return <canvas id="header-canvas" className={styles.canvas}></canvas>
}
