import styles from './Helped.module.scss'
import Section from '@/components/Section';
import {useState, useRef, useEffect} from 'react';
import {getHeightAsNumber, getRowGapAsNumber} from '@/utils/getStyleAsNumber';

const companies = [
  {
    id: 1,
    imageUrl: './src/assets/images/helped/loncaro.png',
    title: 'Loncaro'
  },
  {
    id: 2,
    imageUrl: './src/assets/images/helped/amayu.png',
    title: 'Amayu'
  },
  {
    id: 3,
    imageUrl: './src/assets/images/helped/gotchu.png',
    title: 'Got Chu'
  },
  {
    id: 4,
    imageUrl: './src/assets/images/helped/mezcla.png',
    title: 'Mezcla'
  },
  {
    id: 5,
    imageUrl: './src/assets/images/helped/weirdos.png',
    title: 'Weirdos'
  },
  {
    id: 6,
    imageUrl: './src/assets/images/helped/bibigo.png',
    title: 'Bibigo'
  },
  {
    id: 7,
    imageUrl: './src/assets/images/helped/fds.png',
    title: 'FDS'
  },
  {
    id: 8,
    imageUrl: './src/assets/images/helped/liddlme.png',
    title: 'Liddleme'
  },
  {
    id: 9,
    imageUrl: './src/assets/images/helped/plant.png',
    title: 'Plant Magic'
  },
  {
    id: 10,
    imageUrl: './src/assets/images/helped/dannon.png',
    title: 'Dannon'
  },
  {
    id: 11,
    imageUrl: './src/assets/images/helped/lebby.png',
    title: 'Lebby'
  },
  {
    id: 12,
    imageUrl: './src/assets/images/helped/love.png',
    title: 'Love Beets'
  },

  {
    id: 13,
    imageUrl: './src/assets/images/helped/loncaro.png',
    title: 'Loncaro'
  },
  {
    id: 14,
    imageUrl: './src/assets/images/helped/amayu.png',
    title: 'Amayu'
  },
  {
    id: 15,
    imageUrl: './src/assets/images/helped/gotchu.png',
    title: 'Got Chu'
  },
  {
    id: 16,
    imageUrl: './src/assets/images/helped/mezcla.png',
    title: 'Mezcla'
  },
  {
    id: 17,
    imageUrl: './src/assets/images/helped/weirdos.png',
    title: 'Weirdos'
  },
  {
    id: 18,
    imageUrl: './src/assets/images/helped/bibigo.png',
    title: 'Bibigo'
  },
  {
    id: 19,
    imageUrl: './src/assets/images/helped/fds.png',
    title: 'FDS'
  },
  {
    id: 20,
    imageUrl: './src/assets/images/helped/liddlme.png',
    title: 'Liddleme'
  },
  {
    id: 21,
    imageUrl: './src/assets/images/helped/plant.png',
    title: 'Plant Magic'
  },
  {
    id: 22,
    imageUrl: './src/assets/images/helped/dannon.png',
    title: 'Dannon'
  },
  {
    id: 23,
    imageUrl: './src/assets/images/helped/lebby.png',
    title: 'Lebby'
  },
  {
    id: 24,
    imageUrl: './src/assets/images/helped/love.png',
    title: 'Love Beets'
  },

  {
    id: 25,
    imageUrl: './src/assets/images/helped/loncaro.png',
    title: 'Loncaro'
  },
  {
    id: 26,
    imageUrl: './src/assets/images/helped/amayu.png',
    title: 'Amayu'
  },
  {
    id: 27,
    imageUrl: './src/assets/images/helped/gotchu.png',
    title: 'Got Chu'
  },
  {
    id: 28,
    imageUrl: './src/assets/images/helped/mezcla.png',
    title: 'Mezcla'
  },
  {
    id: 29,
    imageUrl: './src/assets/images/helped/weirdos.png',
    title: 'Weirdos'
  },
  {
    id: 30,
    imageUrl: './src/assets/images/helped/bibigo.png',
    title: 'Bibigo'
  },
  {
    id: 31,
    imageUrl: './src/assets/images/helped/fds.png',
    title: 'FDS'
  },
  {
    id: 32,
    imageUrl: './src/assets/images/helped/liddlme.png',
    title: 'Liddleme'
  },
  {
    id: 33,
    imageUrl: './src/assets/images/helped/plant.png',
    title: 'Plant Magic'
  },
  {
    id: 34,
    imageUrl: './src/assets/images/helped/dannon.png',
    title: 'Dannon'
  },
  {
    id: 35,
    imageUrl: './src/assets/images/helped/lebby.png',
    title: 'Lebby'
  },
  {
    id: 36,
    imageUrl: './src/assets/images/helped/love.png',
    title: 'Love Beets'
  }

]

const Helped = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [ height, setHeight ] = useState(0)
  const contentRef = useRef(null)
  const itemRef = useRef(null)

  useEffect(() => {
    if (!contentRef.current || !itemRef.current) return

    const showElements = 2

    const heightItemElement = getHeightAsNumber(itemRef.current)
    const rowGapListElement = getRowGapAsNumber(contentRef.current)
    const collapsedContent = heightItemElement * showElements + rowGapListElement * 2

    console.log(itemRef)
    
    if (isExpanded) {
      setHeight(contentRef.current?.getBoundingClientRect().height)
    } else {setHeight(collapsedContent)}
  }, [isExpanded])

  return (
    <Section
      modeContainer="container"
      title="We help small emerging brands invent themselves, and fortune 500 companies re-invent themselves. Here’s a look at some of our clients:"
      titleId="helped-title"
    >
      <h2 className="visually-hidden" htmlFor="helped-title"></h2>
      <div className={styles.wrapper} style={{ height }}>
        <ul className={styles.list} ref={contentRef}>
          {companies.map(({title, imageUrl, id}) => (
            <li className={styles.item} key={id} ref={itemRef}
            >
              <img
                className={styles.image}
                src={imageUrl}
                alt={title}
                width="170"
                height="94"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.wrapperButton}>
        <button
          className={styles.expandButton}
          type="button"
          onClick={() => setIsExpanded(toggle => !toggle)}
        >
          {isExpanded ? 'Collapse' : 'Expand to view more'}
        </button>
      </div>
    </Section>
  )}

export default Helped