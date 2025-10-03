import styles from './Services.module.scss'
import classNames from 'classnames'
import Section from '@/components/Section';

const Services = () => {

  const SERVICES = [
    {
      id: 1,
      image: "./src/assets/images/services/clock.svg",
      size: "120",
      title: "Naming & Strategy",
    },
    {
      id: 2,
      image: "./src/assets/images/services/bulb.svg",
      size: "120",
      title: "Branding",
    },
    {
      id: 3,
      image: "./src/assets/images/services/pack.svg",
      size: "120",
      title: "Packaging Design",
    },
    {
      id: 4,
      image: "./src/assets/images/services/photo.svg",
      size: "120",
      title: "Photo & Video",
    },
    {
      id: 5,
      image: "./src/assets/images/services/web.svg",
      size: "120",
      title: "Web Design",
    },
    {
      id: 6,
      image: "./src/assets/images/services/trade-Show-Design.svg",
      size: "120",
      title: "Trade Show Design",
    },
    {
      id: 7,
      image: "./src/assets/images/services/content.svg",
      size: "120",
      title: "Content Creation",
    },
    {
      id: 8,
      image: "./src/assets/images/services/support.svg",
      size: "120",
      title: "Ongoing Support",
    }
  ]

  return (
    <Section
      modeContainer='container-black'
      modeBg='black'
      title="Our Brand Pollination™ Services"
      titleId="services-title"
      description="We offer a wide range of proven creative services that help grow your brand in a meaningful and matterful way."
    >
      <h2 className="visually-hidden" htmlFor="services-title"></h2>
      <ul className={styles.list}>
        {SERVICES.map(({ image, title, size, id }) => (
          <li className={styles.item} key={id}>
            <img
              className={styles.image}
              src={image}
              alt=""
              width={size}
              height={size}
              loading="lazy"
            />
            <h3 className={styles.title}>{title}</h3>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Services