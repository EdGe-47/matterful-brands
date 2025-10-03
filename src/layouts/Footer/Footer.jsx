import styles from './Footer.module.scss'
import Logo from '@/components/Logo';
import Location from '@/components/Location';
import classNames from 'classnames';
import Socials from '@/components/Socials';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={classNames(styles.container, 'container')}>
        <div className={styles.wrapper}>
          <header className={styles.header}>
            <Logo className="footerLogo"/>
          </header>
          <div className={styles.body}>
            <div className={styles.locationWrapper}>
              <Location
                imgSrc="./src/assets/icons/clock10.svg"
                title="Los Angeles"
                subtitle="CA"
                address="901 Hermosa Ave, Hermosa Beach, CA 90254"
              />
              <Location
                imgSrc="./src/assets/icons/clock1.svg"
                title="Manhattan"
                subtitle="NY"
                address="601 W 26th St, Suite 325 - 12,
New York, NY 10001"
              />
            </div>
            <div className={styles.sic1alWrapper}>
              <Socials
                title="Have a big idea? Let's talk!"
                email="contact@matterfulbrands.com"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.extra}>
        <div className={styles.copyright}>Matterful Brands © 2023 All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer