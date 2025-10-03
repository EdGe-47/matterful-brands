import styles from './SliderCard.module.scss'
import Slider from '@/components/Slider';
import EmployeeCard from '@/components/EmployeeCard';
import DATA_EMPLOYEE_CARD from '@/components/EmployeeCard/DATA_EMPLOYEE_CARD'

const SliderCard = () => {
  return (
    <div className={styles.wrapper}>
      <Slider>
        {DATA_EMPLOYEE_CARD.map(({ srcImg, name, post, description, id }) => (
          <EmployeeCard
            imgSrc={srcImg}
            name={name}
            post={post}
            description={description}
            key={id}
          />
        ))}
      </Slider>
    </div>
  )
}

export default SliderCard